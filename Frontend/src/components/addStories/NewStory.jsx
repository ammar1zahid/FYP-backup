import { useState } from "react";
import { makeRequest } from "../../axios";
import "./newstory.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const NewStory = ({ setOpenStory }) => {
  const [cover, setCover] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

  const queryClient = useQueryClient();

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const mutation = useMutation({
    mutationFn: (newStory) => makeRequest.post("/stories", newStory),
    onSuccess: () => {
      queryClient.invalidateQueries(['stories']);
      // Close the story modal upon successful upload
      setOpenStory(false);
      setErrorMessage(""); // Clear any existing error messages
    },
    onError: (error) => {
        console.log("in eroooooooorr")
        // Handle error here. For example, setting an error message to display to the user.
        // You might need to adjust based on the structure of the error response
        const message = error.response.data || "An error occurred while adding your story.";
        setErrorMessage(message);
      },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (cover) {
      const imgUrl = await upload(cover);
      if (imgUrl) {
        mutation.mutate({ img: imgUrl });
        
        // Consider resetting cover and any other relevant state here if needed
      } else {
        // Handle the case where image upload fails before even reaching the story addition logic
        setErrorMessage("Failed to upload image.");
      }
    }
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Add Story</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages here */}
        <form>
          <div className="files">
            <label htmlFor="cover">
              <span>Story Picture</span>
              <div className="imgContainer">
                {cover && <img src={URL.createObjectURL(cover)} alt="" />}
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />
          </div>
          <button onClick={handleClick}>Upload</button>
        </form>
        <button className="close" onClick={() => setOpenStory(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NewStory;

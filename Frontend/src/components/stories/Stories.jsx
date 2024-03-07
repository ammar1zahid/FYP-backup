import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

    //test data

    const stroies=[
      {
        id:1,
        name:"ammar",
        img:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id:2,
        name:"akram",
        img:"https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id:3,
        name:"ali",
        img:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]



  // const { isLoading, error, data } = useQuery(["stories"], () =>
  //   makeRequest.get("/stories").then((res) => {
  //     return res.data;
  //   })
  // );

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        {/* <img src={ currentUser.profilePic} alt="" /> */}
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {/* {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))} */}
        {stroies.map((story) => (
                 <div className="story" key={story.id}>
                  <img src={story.img} alt="" />
                  <span>{story.name}</span>
                </div>
              ))}
    </div>
  );
};

export default Stories;

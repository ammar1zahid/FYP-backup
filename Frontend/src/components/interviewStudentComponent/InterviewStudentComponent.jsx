import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext,useEffect, useState } from "react";
import moment from "moment";
import { AuthContext } from "../../context/authContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./interviewStudentComponent.scss";
import axios from "axios";


const InterviewStudentComponent = () => {
  const { currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUserId = currentUser.id;

  const queryClient = useQueryClient();

  //for fetching all applied job posts of our current user
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
    makeRequest.get("/posts/appliedjobsUser?Puserid="+currentUserId).then((res) => {
        return res.data;
      }),
  });

  //for deleting a job post
  const deleteMutation = useMutation({
    mutationFn: (Pid) => makeRequest.delete(`/posts/${Pid}`), 
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); 
    },
  });

  //for deleting a job post
  const handleDelete = (Pid) => {
    deleteMutation.mutate(Pid);
  };

  //for opening the menu of delete post
  const handleMenuOpen = (id) => {
    setMenuOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {error && <div>Error fetching data</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && data.length === 0 && <div>Currently no posts</div>}
      {data &&
        data.map((post) => (


          <div key={post.Pid} className="post" style={{ marginBottom: "20px" }}>
            <div className="container">
              <div className="user">
                <div className="userInfo">
                  <img src={`/upload/${post.profilePic}`} alt="" />
                  <div className="details">
                    <span className="name">{post.name}</span>
                    
                    <span className="date">
                      {moment(post.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
                <MoreHorizIcon onClick={() => handleMenuOpen(post.id)} />
                {menuOpen === post.id && post.Puserid === currentUserId && (
                  <button onClick={() => handleDelete(post.Pid)}>delete</button>
                )}
              </div>
              <div className="content">
                <p>{post.Postdesc}</p>
                {post.img && (
                  <div>
                    {post.img.endsWith(".jpg") ||
                    post.img.endsWith(".png") ||
                    post.img.endsWith(".jpeg") ? (
                      <img src={`/upload/${post.img}`} alt="Image" />
                    ) : (
                      <video controls>
                        <source src={`/upload/${post.img}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}
              </div>

              <h4>Your Interview Status:</h4>

              {/* Display the list of users who have applied to the post */}
              

              {/* calling the InterviewApplicantsForPost component by passing the current post id */}
              <InterviewApplicantsForPost postId={post.Pid} />

            </div>
          </div>


        ))}
    </div>
  );
};





//InterviewApplicantsForPost component
const InterviewApplicantsForPost = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.id;
  const [remainingTime, setRemainingTime] = useState({});
  const queryClient = useQueryClient();

  // For fetching all scheduled interviews of a post
  const { isLoading, error, data: applicantsData } = useQuery({
    queryKey: ["applicants", postId],
    queryFn: () => makeRequest.get(`/interviews/post?postId=${postId}`).then((res) => res.data),
    enabled: !!postId,
    refetchOnWindowFocus: false,
    retry: 1,
  });


  
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [applicantsData]);

  const updateRemainingTime = () => {
    const updatedTime = {};
    applicantsData.forEach((applicant) => {
      const scheduledTime = moment(applicant.scheduledAt);
      const currentTime = moment();
      const duration = moment.duration(scheduledTime.diff(currentTime));
      const hours = duration.hours().toString().padStart(2, '0');
      const minutes = duration.minutes().toString().padStart(2, '0');
      const seconds = duration.seconds().toString().padStart(2, '0');
      updatedTime[applicant.id] = `${hours}h ${minutes}m ${seconds}s`;
    });
    setRemainingTime(updatedTime);
  };

  if (isLoading) return <div>Loading interviews...</div>;
  if (error) return <div>Error fetching interviews applicants: {error.message}</div>;

  // Filter applicants data based on the current user
  const currentUserApplicants = applicantsData.filter((applicant) => applicant.studentid === currentUserId);

  // Check if there are any interviews for the current user
  const hasCurrentUserInterviews = currentUserApplicants.length > 0;

  // If there are no users who have applied to the current post, or if there are no interviews for the current user, display a message
  if (!Array.isArray(currentUserApplicants) || currentUserApplicants.length === 0) {
    return (
      <div>
        {!hasCurrentUserInterviews ? (
          // Display a message if current user has no interviews upcoming for current post
          <div>You don't have any upcoming interview for this job</div>
        ) : (
          // Display a message if there are no interviews from any user
          <div>You don't have any upcoming interview for this job</div>
        )}
      </div>
    );
  }

    // Function to calculate remaining time until the interview
    // const calculateRemainingTime = (scheduledAt) => {
    //   const scheduledTime = moment(scheduledAt);
    //   const currentTime = moment();
    //   const duration = moment.duration(scheduledTime.diff(currentTime));
    //   const hours = duration.hours();
    //   const minutes = duration.minutes();
    //   const seconds = duration.seconds();
    //   return `${hours}h ${minutes}m ${seconds}s`;
    // };

    return (
      <div>
        {currentUserApplicants.map((applicant) => (
          <div key={applicant.id} className="applicantContainer">
            <div className="applicantItem">
              <div className="applicantUserInfo">
                <img src={`/upload/${applicant.profilePic}`} alt="" />
                <span>{applicant.name}</span>
                {remainingTime[applicant.id] ? (
                  // Check if remaining time exists
                  remainingTime[applicant.id].startsWith("-") ? (
                    // Display "Expired" if remaining time is negative
                    <span className="timer">Expired</span>
                  ) : (
                    // Display remaining time
                    <span className="timer">Interview Scheduled in {remainingTime[applicant.id]}</span>
                  )
                ) : (
                  // If remaining time is not available, display loading or error message
                  <span className="timer">Loading...</span>
                )}
                <div className="applicantButtons">{/* Add buttons or actions for the applicants */}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    
};



export default  InterviewStudentComponent;
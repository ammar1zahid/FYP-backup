import Post from "../post/Post";
import "./savedPosts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useContext , useEffect ,useRef , useState } from "react";

const SavedPostsComponent = () => {
  const { currentUser } = useContext(AuthContext);
 
  // For fetching all saved posts of our current user
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get(`/savePosts/post?userId=${currentUser.id}`).then((res) => {
        return res.data;
      })
  });

  return (
    <div className="posts">
      {error ? (
        "Something went wrong!"
      ) : isLoading ? (
        "Loading..."
      ) : data.length === 0 ? (
        <p className="no-saved-posts">You don't have any saved posts</p>
      ) : (
        data.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default SavedPostsComponent;

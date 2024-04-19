import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

// const Posts = ({userId}) => {
const Posts = ({Puserid}) => {
 
  const { isLoading, error, data } = useQuery({queryKey: ["posts"], 
  queryFn: () =>
    makeRequest.get("/posts?Puserid="+Puserid).then((res) => {
    //makeRequest.get("/posts").then((res) => {
      return res.data;
    })}
  );



  //demo data

  // const posts=[
  //   {
  //     id:1,
  //     name:"ammar",
  //     userId:1,
  //     profilePic:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     desc:"post from ammar",
  //     img:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //   },
  //   {
  //     id:2,
  //     name:"akram",
  //     userId:2,
  //     profilePic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     desc:"post from akram",
  //     img:"https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //   },
  //   {
  //     id:3,
  //     name:"ali",
  //     userId:3,
  //     profilePic:"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     desc:"post from ali",
  //     img:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //   }
  // ]

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}

        {/* {posts.map((post) => <Post post={post} key={post.id} />)} */}
    </div>
  );
};

export default Posts;

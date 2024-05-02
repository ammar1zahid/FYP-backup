import Stories from "../../components/stories/Stories"

 import Posts from "../../components/RecruiterComponents/jobPosts/JobPosts"
//  import SavedPostsComponent from ".../components/savedPosts/SavedPosts"
// import SavedPostsComponent from "../../components/savedPosts/SavedPosts"
import SavedPostsComponent from "../../components/savedPosts/SavedPostsComponent"
import "./savedPostPage.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const SavedPostPage = () => {

  const { currentUser } = useContext(AuthContext); 

  const userId = currentUser.id
 

  return (
    <div className="home">
      <Stories/>
      <h1>Your Saved Posts</h1>
      
      <SavedPostsComponent/>
      

    </div>
  )
}

export default SavedPostPage
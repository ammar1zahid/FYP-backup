 import Stories from "../../components/stories/Stories"
 import Posts from "../../components/appliedJobs/AppliedJobPosts"
  import Share from "../../components/share/Share"
import "./appliedJobStudent.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;
  return (
    <div className="home">
      <Stories/>
      <h1>My Applied Job</h1>
      <Posts Puserid={userId} />
    </div>
  )
}

export default Home
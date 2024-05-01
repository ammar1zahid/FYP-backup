import Stories from "../../../components/stories/Stories"
import  InterviewComponent  from "../../../components/RecruiterComponents/interviewComponent/InterviewComponent"
import "./interviewRecruiter.scss"

const InterviewRecruiter = () => {
  return (
    <div className="home"> 
      <Stories/>
      <h1>Your Job Interviews</h1>
      <InterviewComponent/>
     

    </div>
  )
}

export default InterviewRecruiter
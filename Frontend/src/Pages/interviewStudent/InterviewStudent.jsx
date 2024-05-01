import Stories from "../../components/stories/Stories"
import InterviewStudentComponent from "../../components/interviewStudentComponent/InterviewStudentComponent"
import "./interviewStudent.scss"

const InterviewStudent = () => {
  return (
    <div className="home"> 
      <Stories/>
      <h1>Your Upcoming Job Interviews</h1>
      <InterviewStudentComponent/>
     

    </div>
  )
}

export default InterviewStudent
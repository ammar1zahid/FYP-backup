import Stories from "../../../components/stories/Stories"
import JobApplicationsComponent from "../../../components/RecruiterComponents/jobApplicationsComponent/JobApplicationsComponent"
import "./applicationRecruiter.scss"

const ApplicationRecruiter = () => {
  return (
    <div className="home">
      <Stories/>
      <h1>Your job applications</h1>
  
      <JobApplicationsComponent/>

    </div>
  )
}

export default ApplicationRecruiter
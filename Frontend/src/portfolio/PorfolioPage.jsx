import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/font-awesome/css/font-awesome.min.css'
import './vendor/devicons/css/devicons.min.css'
import './vendor/simple-line-icons/css/simple-line-icons.css'
import './css/resume.min.css'
import "./img/profile.jpg"

import { AuthContext } from '../context/authContext';



function PorfolioPage() {

  const { currentUser } = useContext(AuthContext);
  const userid = currentUser.id;

  const userId = currentUser.id;

  // ABOUT DATA FETCHING API WORK
  const [aboutData, setAboutData] = useState({
    fullname: '',
    address: '',
    contact_number: '',
    email: '',
    about_paragraph: '',
    facebookLink: '', 
    twitterLink: '', 
    githubLink: '', 
    linkedinLink: ''
  });


  const fetchAboutData = async () => {
    try {
        const response = await axios.get(`http://localhost:8800/api/portfolio/getAboutData/${userid}`);
        setAboutData(response.data);
    } catch (error) {
        console.error('Error fetching About data:', error);
    }
  };
  
  useEffect(() => {
    fetchAboutData();
  }, []);
  

  let fblink = "";
  let twitterlink = "";
  let linkedinlink = "";
  let githublink = "";

  // ABOUT DATA FETCHING API WORK








  // EDUCATION DATA FETCHING API WORK
  const [educationData, setEducationData] = useState([]); // State for holding education data

  const fetchEducationData = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/portfolio/getEducationData/${userId}`); // Fetching from API
      setEducationData(response.data); // Storing in state
    } catch (error) {
      console.error('Error fetching education data:', error);
    }
  };

  // Fetch education data when component mounts
  useEffect(() => {
    fetchEducationData();
  }, [userId]);

  // EDUCATION DATA FETCHING API WORK





  //EXPERIENCE DATA FETCHING API WORK
  // State to store experience data
  const [experienceData, setExperienceData] = useState([]); 

  // Function to fetch experience data
  const fetchExperienceData = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/portfolio/getExperienceData/${userId}`); // API endpoint
      setExperienceData(response.data); // Store fetched data in state
    } catch (error) {
      console.error('Error fetching experience data:', error);
    }
  };

  useEffect(() => {
    fetchExperienceData(); // Fetch experience data when the component mounts
  }, [userId]);
  //EXPERIENCE DATA FETCHING API WORK


  //CERTIFICATIONS DATA FETCHING API WORK
  const [certificationsData, setCertificationsData] = useState([]); // State for Certifications section

  // Function to fetch Certifications data
  const fetchCertificationsData = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/portfolio/getCertificationsData/${userId}`);
      setCertificationsData(response.data); // Store fetched Certifications data
    } catch (error) {
      console.error('Error fetching Certifications data:', error);
    }
  };

  // Fetch Certifications data when the component mounts
  useEffect(() => {
    fetchCertificationsData(); // Fetch Certifications data on component mount
  }, [userId]);
  //CERTIFICATIONS DATA FETCHING API WORK



  //AWARDS DATA FETCHING API WORK
  // State to store awards data
  const [awardsData, setAwardsData] = useState([]);

  // Function to fetch awards data
  const fetchAwardsData = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/portfolio/getAwardsData/${userId}`); // Fetch awards data
      setAwardsData(response.data); // Store fetched data in state
    } catch (error) {
      console.error('Error fetching awards data:', error);
    }
  };

  useEffect(() => {
    fetchAwardsData(); // Fetch awards data when the component mounts
  }, [userId]);
  //AWARDS DATA FETCHING API WORK



  //INTERESTS DATA FETCHING API WORK
  const [interestsData, setInterestsData] = useState([]); // State to store fetched Interests data

  const fetchInterestsData = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/portfolio/getInterestsData/${userId}`); // Fetching from API
      setInterestsData(response.data); // Store fetched data in state
    } catch (error) {
      console.error('Error fetching interests data:', error);
    }
  };
  
  // Fetch Interests data when the component mounts
  useEffect(() => {
    fetchInterestsData(); // Fetch Interests data when component mounts
  }, [userId]);
  
  //INTERESTS DATA FETCHING API WORK
  





    return (
    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <title>Resume - Start Bootstrap Theme</title>
  

    {/* Bootstrap core CSS */}
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  
     {/* Custom fonts for this template */}
  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
  <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet" />
  <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
 
  
  {/* Custom styles for this template */}
  <link href="css/resume.min.css" rel="stylesheet" />
  
  {/* side nav bar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      {/* <span className="d-block d-lg-none">Start Bootstrap</span> */}
      <span className="d-none d-lg-block">
        
        {/* side navbar profile img */}
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" 
        // src="img/profile.jpg" 
        src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='img' />

      </span>
    </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>


    {/* sidebar components div */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">


        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#certifications">Certifications</a>
        </li>


      </ul>
    </div>
    {/* sidebar components div */}


  </nav>



  <div className="container-fluid p-0"> {/* MAIN BIG DIV*/}



    {/* ABOUT SECTION */}
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          <span>
          {aboutData.fullname}
            </span>
        </h1>
        <div className="subheading mb-5">
          {aboutData.address}
          · 
          {aboutData.contact_number}
          ·
          <a href="mailto:name@email.com">
            {aboutData.email}
            </a>
        </div>
        <p className="mb-5">
          {aboutData.about_paragraph}
        </p>


{/* social links checking whether user has link in db or not and which link */}
        {aboutData.facebookLink !== null && (


        console.log("in about link frontend"),
        fblink = aboutData.facebookLink,
        console.log("fblink: ", fblink)


        )}

{aboutData.twitterLink !== null && (

console.log("in about twitter link frontend"),
twitterlink = aboutData.twitterLink,
console.log("twitterlink: ", twitterlink)

)}

{aboutData.linkedinLink !== null && (

console.log("in about linkedin link frontend"),
linkedinlink = aboutData.linkedinLink,
console.log("linkedinlink: ", linkedinlink)

)}

{aboutData.githubLink !== null && (

console.log("in about github link frontend"),
githublink = aboutData.githubLink,
console.log("githublink: ", githublink)

)}

{/* social links checking whether user has link in db or not and which link */}



        <ul className="list-inline list-social-icons mb-0">

        {fblink !== "" && (
          <li className="list-inline-item">
            <a href={fblink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-facebook fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        )}

        {twitterlink !== "" && (
          <li className="list-inline-item">
            <a href={twitterlink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-twitter fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        )}

        {linkedinlink !== "" && (
          <li className="list-inline-item">
            <a href={linkedinlink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        )}

        {githublink !== "" && (
          <li className="list-inline-item">
            <a href={githublink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-github fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        )}


        </ul>
      </div>
    </section>
    {/* ABOUT SECTION */}





    {/* EXPERIENCE SECTION */}
   

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          {experienceData.map((item) => (
            <div key={item.experienceSectionID} className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">{item.jobTitle}</h3>
                <div className="subheading mb-3">{item.jobCompany}</div>
                <p>{item.jobDescription}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{item.jobDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


    {/* EXPERIENCE SECTION */}






    {/* EDUCATION SECTION */}
    


<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          {educationData.map((item) => (
            <div key={item.educationSectionID} className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">{item.universityName}</h3>
                <div className="subheading mb-3">{item.degreeType}</div>
                <div>{item.courseName}</div>
                <p>CGPA: {item.cgpa}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{item.degreeDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* EDUCATION SECTION */}




    {/* SKILLS SECTION */}
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicons devicons-html5" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-css3" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-javascript" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-jquery" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-sass" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-less" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-bootstrap" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-wordpress" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-grunt" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-gulp" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-npm" />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check" />
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa-li fa fa-check" />
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i className="fa-li fa fa-check" />
            Cross Functional Teams</li>
          <li>
            <i className="fa-li fa fa-check" />
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>
    {/* SKILLS SECTION */}




    {/* INTERESTS SECTION */}

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
  <div className="my-auto">
    <h2 className="mb-5">Interests</h2>
    {interestsData.map((item) => (
      <div key={item.interestsSectionID} className="mb-5">
        <p>{item.paragraph1}</p> {/* Display the fetched data */}
        <p className="mb-0">{item.paragraph2}</p> {/* Display the fetched data */}
      </div>
    ))}
  </div>
</section>




    {/* INTERESTS SECTION */}




    {/* AWARDS  */}
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards</h2>

          {awardsData.map((item) => (
            <div key={item.awardsSectionID} className="resume-item d-flex flex-column flex-md-row mb-5">
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning" />
                  {item.awardTitle}
                </li>
              </ul>
              <p>{item.awardDescription}</p>
            </div>
          ))}

        </div>
      </section>
    {/* AWARDS*/}


    {/* certificaitons */}
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="certifications">
    <div className="my-auto">
          <h2 className="mb-5">Certifications</h2>
          {certificationsData.map((certification) => (
            <div key={certification.certificationsSectionID}>
              <ul className="fa-ul mb-0">
                <li>
                  <FontAwesomeIcon icon={faCertificate} style={{ color: '#dadd36' }} />
                  {certification.certificationName}
                </li>
              </ul>
              <p>{certification.certificationDescription}</p>
            </div>
          ))}
        </div>
    </section> 





  </div> {/* MAIN BIG DIV */}
  

  {/* Bootstrap core JavaScript */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  {/* Plugin JavaScript */}
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  {/* Custom scripts for this template */}
  <script src="js/resume.min.js"></script>

</div>
  )
}

export default PorfolioPage
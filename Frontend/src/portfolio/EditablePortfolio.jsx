import React, { useEffect } from 'react'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/font-awesome/css/font-awesome.min.css'
import './vendor/devicons/css/devicons.min.css'
import './vendor/simple-line-icons/css/simple-line-icons.css'
import './css/resume.min.css'
import "./img/profile.jpg"
import AboutP from './editableComponents/AboutP.jsx'


function EditablePortfolio() {


    
    // const [portfolioData, setPortfolioData] = useState({
    //     h1about: '',
    //     line1about: '',
    //     line2about: '',
    //     line3about: '',
    //     line4about: '',
    //     line5about: '',
    //     line6about: '',
    //     imgabout: ''
    //   });

    //   useEffect(() => {
    //     // Fetch data from the backend when the component mounts
    //     axios.get('http://localhost:5000/api/about')
    //     .then(response => {
    //       const { h1about, line1about, line2about, line3about, line4about, line5about, line6about, imgabout } = response.data;
    //       setaboutFormData({ h1about, line1about, line2about, line3about, line4about, line5about, line6about, imgabout });
    //     })
    //       .catch(error => {
    //         console.error('about Error fetching data:', error);
    //       });
    //   }, []); // Empty dependency array ensures this effect runs only once, when the component mounts
    
    
    //   const handleChange = e => {
    //     setaboutFormData({ ...aboutformData, [e.target.name]: e.target.value });
    //   };
    
    
    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     // Handle form submission and update data in the backend
    //     axios.put('http://localhost:5000/api/about', aboutformData)
    //       .then(response => {
    //         console.log('about Data updated successfully');
    //       })
    //       .catch(error => {
    //         console.error('about Error updating data:', error);
    //       });
    //   };





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
  
{/* 
        <Link to="" className={`nav-item nav-link ${isLinkActive('/About') ? 'active' : ''}`}>
          <input type="text" name="about" value={navformData.about} onChange={handleChange} style={{ width: '100px' }}/> */}
            {/* {navData.about} */}
          {/* </Link> */}
  
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about" 
            // <a className="nav-link js-scroll-trigger" href="#about" 

            >
                
                About
                {/* <input type="text" name='about'/> */}
            
            </a>

            {/* <input type="text"  name="about" className="nav-link js-scroll-trigger" href="#about" /> */}
            
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
  
  
        </ul>
      </div>
      {/* sidebar components div */}
  
  
    </nav>
  
  
  
    <div className="container-fluid p-0"> {/* MAIN BIG DIV*/}
  
  
  
      {/* ABOUT SECTION */}
      {/* <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Clarence
            <span className="text-primary">Taylor</span>
          </h1>
          <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section> */}

      <AboutP />
      {/* ABOUT SECTION */}
  
  
  
      {/* EXPERIENCE SECTION */}
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>
      {/* EXPERIENCE SECTION */}
  
  
  
  
      {/* EDUCATION SECTION */}
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
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
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
        </div>
      </section>
      {/* INTERESTS SECTION */}
  
  
  
  
      {/* AWARDS AND CERTIFICATIONS SECTION */}
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Google Analytics Certified Developer</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Mobile Web Specialist - Google Certification</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
            <li>
            </li><li>
              <i className="fa-li fa fa-trophy text-warning" />
              1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005</li>
          </ul>
        </div>
      </section>
      {/* AWARDS AND CERTIFICATIONS SECTION */}
  
  
  
  
  
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

export default EditablePortfolio
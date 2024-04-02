import React, { useEffect, useState } from 'react'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/font-awesome/css/font-awesome.min.css'
import './vendor/devicons/css/devicons.min.css'
import './vendor/simple-line-icons/css/simple-line-icons.css'
import './css/resume.min.css'
import "./img/profile.jpg"

// import "./vendor/bootstrap/js/bootstrap.bundle.min.js"


import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


import AboutP from './editableComponents/AboutP.jsx'
import ExperienceP from './editableComponents/ExperienceP.jsx'
import EducationP from './editableComponents/EducationP.jsx'
import SkillsP from './editableComponents/SkillsP.jsx'
import InterestsP from './editableComponents/InterestsP.jsx'
import AwardsP from './editableComponents/AwardsP.jsx'
import CertificationsP from './editableComponents/CertificationsP.jsx'

import "./popupbox.css"

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 127, 255, 0.5)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);





function EditablePortfolio() {


  // const [anchor, setAnchor] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchor(anchor ? null : event.currentTarget);
  // };

  // const open = Boolean(anchor);
  // const id = open ? 'simple-popup' : undefined;


  // const [selectedSection, setSelectedSection] = useState(null);


  const [open, setOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const id = open ? 'popup-body' : undefined;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAddNavItem = (item) => {
    // Add item to navbar only if it's not already added
    if (!navItems.includes(item)) {
      setNavItems([...navItems, item]);
      console.log(`Adding ${item} to the navbar`);
    }
  };

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
    
    {/* SIDE NAVBAR COMPLETE DIV */}
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary " id="sideNav">
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav"> */}
  
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
  
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button> */}
  
  
      {/* sidebar components div */}
{/* ojdcoaejfcawjemipf */}

{/* GOOOODDD COODDEEEEEEEEEEEEEEEEEEE */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div> */}
{/* GOOOODDD COODDEEEEEEEEEEEEEEEEEEE */}



<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">


{/* <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popup
      </Button>
      <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>
          <button>Experience + </button> <button>Education + </button>
          <p></p>
          <button>Skills + </button> <button>Interests + </button>
        </PopupBody>
      </BasePopup>
    </div> */}

<li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>


<div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popup
      </Button>
      <BasePopup id={id} open={open} anchor={null}>
        <PopupBody>
          <button onClick={() => handleAddNavItem('Experience')}>Experience +</button>
          <button onClick={() => handleAddNavItem('Education')}>Education +</button>
          <p></p>
          <button onClick={() => handleAddNavItem('Skills')}>Skills +</button>
          <button onClick={() => handleAddNavItem('Interests')}>Interests +</button>
        </PopupBody>
      </BasePopup>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link js-scroll-trigger" href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      
      

      
    </div>
      




    </ul>
    </div>





{/* kjdwofnjwnjewhf */}
      {/* sidebar components div */}
  
  

    </nav>
  {/* SIDE NAVBAR COMPLETE DIV */}
  
  
<AboutP />
  
    <div className="container-fluid p-0"> 
    
    {navItems.includes('Experience') && (
        <section id="experience">
          {/* <h2>Experience Section</h2> */}
          <ExperienceP />
          {/* Add your content for Experience section */}
        </section>
      )}

      {navItems.includes('Education') && (
        <section id="education">
          {/* <h2>Education Section</h2> */}
          <EducationP />
          {/* Add your content for Education section */}
        </section>
      )}

      {navItems.includes('Skills') && (
        <section id="skills">
          {/* <h2>Skills Section</h2> */}
          <SkillsP />
          {/* Add your content for Skills section */}
        </section>
      )}

      {navItems.includes('Interests') && (
        <section id="interests">
          {/* <h2>Interests Section</h2> */}
          <InterestsP />
          {/* Add your content for Interests section */}
        </section>
      )}
  
    </div> 
    {/* MAIN BIG DIV */}


    
  

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



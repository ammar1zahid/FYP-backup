import React, { useEffect, useState } from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
import '../vendor/devicons/css/devicons.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css'
import '../css/resume.min.css'


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function ExperienceP() {


    const [jobItems, setJobItems] = useState([{
        id: 1,
        jobTitle: '',
        jobCompany: '',
        jobDescription: ''
    }]);

    const handleAddMore = () => {
        const newItem = {
            id: jobItems.length + 1,
            jobTitle: '',
            jobCompany: '',
            jobDescription: ''
        };
        setJobItems(prevState => [...prevState, newItem]);
    };

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        const updatedItems = jobItems.map(item => {
            if (item.id === id) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setJobItems(updatedItems);
    };


  return (
    

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">

<div className="my-auto">


    <h2 className="mb-5">Experience</h2>

    <div>
            {jobItems.map(item => (
                <div key={item.id} className="resume-item d-flex flex-column flex-md-row mb-5">
                    {/* job related info div */}
                    <div className="resume-content mr-auto">
                        {/* job role title */}
                        <h3 className="mb-0">
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Role Title"
                                style={{ border: 'none' }}
                                value={item.jobTitle}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </h3>
                        {/* job company name */}
                        <div className="subheading mb-3">
                            <input
                                type="text"
                                name="jobCompany"
                                placeholder="Company Name"
                                style={{ border: 'none' }}
                                value={item.jobCompany}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </div>
                        {/* role related info */}
                        <p>
                            <input
                                type="text"
                                name="jobDescription"
                                placeholder="Description"
                                style={{ border: 'none' }}
                                value={item.jobDescription}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </p>
                    </div>
                    {/* job related info div */}
                    {/* job timeline div */}
                    <div className="resume-date text-md-right">
                        <span className="text-primary">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </span>
                    </div>
                    {/* job timeline div */}
                </div>
            ))}
            <button onClick={handleAddMore}>Add More</button>
        </div>


  </div>

</section>





    //   {/* <div className="resume-item d-flex flex-column flex-md-row mb-5">
    //     <div className="resume-content mr-auto">
    //       <h3 className="mb-0">Web Developer</h3>
    //       <div className="subheading mb-3">Intelitec Solutions</div>
    //       <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
    //     </div>
    //     <div className="resume-date text-md-right">
    //       <span className="text-primary">December 2011 - March 2013</span>
    //     </div>
    //   </div>


    //   <div className="resume-item d-flex flex-column flex-md-row mb-5">
    //     <div className="resume-content mr-auto">
    //       <h3 className="mb-0">Junior Web Designer</h3>
    //       <div className="subheading mb-3">Shout! Media Productions</div>
    //       <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
    //     </div>
    //     <div className="resume-date text-md-right">
    //       <span className="text-primary">July 2010 - December 2011</span>
    //     </div>
    //   </div>


    //   <div className="resume-item d-flex flex-column flex-md-row">
    //     <div className="resume-content mr-auto">
    //       <h3 className="mb-0">Web Design Intern</h3>
    //       <div className="subheading mb-3">Shout! Media Productions</div>
    //       <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
    //     </div>
    //     <div className="resume-date text-md-right">
    //       <span className="text-primary">September 2008 - June 2010</span>
    //     </div>
    //   </div>
    
    
    //  */}

  )
  
}

export default ExperienceP
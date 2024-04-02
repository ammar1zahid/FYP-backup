import React, { useEffect, useState } from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
import '../vendor/devicons/css/devicons.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css'
import '../css/resume.min.css'


// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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

    const handleRemove = (id) => {
        setJobItems(prevState => prevState.filter(item => item.id !== id));
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
    
   

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Experience">

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
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider> */}
                            <input type="text" name='date' placeholder='date'/>
                        </span>
                    </div>
                    {/* job timeline div */}
                    {/* Remove button */}
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
                
            ))}
            <button onClick={handleAddMore} >Add More</button>
        </div>


  </div>

</section>




  )
  
}

export default ExperienceP
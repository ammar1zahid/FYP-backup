import React, { useEffect, useState } from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
import '../vendor/devicons/css/devicons.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css'
import '../css/resume.min.css'

function EducationP() {


    const [educationItems, setEducationItems] = useState([{
        id: 1,
        uniName: '',
        degreeType: '',
        degreeName: '',
        cgpa: '',
        degreeDate: ''
    }]);

    const handleAddMore = () => {
        const newItem = {
            id: educationItems.length + 1,
            uniName: '',
            degreeType: '',
            degreeName: '',
            cgpa: '',
            degreeDate: ''
        };
        setEducationItems(prevState => [...prevState, newItem]);
    };

    const handleRemove = (id) => {
        setEducationItems(prevState => prevState.filter(item => item.id !== id));
    };

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        const updatedItems = educationItems.map(item => {
            if (item.id === id) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setEducationItems(updatedItems);
    };



  return (
    
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Education">
    <div className="my-auto">


      <h2 className="mb-5">Education</h2>



      <div>
            {educationItems.map(item => (
                <div key={item.id} className="resume-item d-flex flex-column flex-md-row mb-5">
                    {/* University related info div */}
                    <div className="resume-content mr-auto">
                        {/* University name */}
                        <h3 className="mb-0">
                            <input
                                type="text"
                                name="uniName"
                                placeholder="University"
                                style={{ border: 'none' }}
                                value={item.uniName}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </h3>
                        {/* Degree type */}
                        <div className="subheading mb-3">
                            <input
                                type="text"
                                name="degreeType"
                                placeholder="Degree Type"
                                style={{ border: 'none' }}
                                value={item.degreeType}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </div>
                        {/* Degree name */}
                        <div>
                            <input
                                type="text"
                                name="degreeName"
                                placeholder="Course Name"
                                style={{ border: 'none' }}
                                value={item.degreeName}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </div>
                        {/* Degree cgpa */}
                        <p>
                            CGPA: <input
                                type="text"
                                name="cgpa"
                                placeholder="CGPA"
                                style={{ border: 'none' }}
                                value={item.cgpa}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </p>
                    </div>
                    {/* University related info div */}
                    {/* Degree timeline div */}
                    <div className="resume-date text-md-right">
                        <span className="text-primary">
                            <input
                                type="text"
                                name="degreeDate"
                                placeholder="Degree Timeline"
                                style={{ border: 'none' }}
                                value={item.degreeDate}
                                onChange={(e) => handleChange(item.id, e)}
                            />
                        </span>
                    </div>
                    {/* Degree timeline div */}
                    {/* Remove button */}
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddMore}>Add More</button>
        </div>






    </div>
  </section>

  )
}

export default EducationP


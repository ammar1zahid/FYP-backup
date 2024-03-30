import { useContext, useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import "./cvTemplates/secondCV.css";

// Frontend\src\context\authContext.jsx
// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: 20,
//     },
//     section: {
//       marginBottom: 10,
//     },
//     label: {
//       marginBottom: 5,
//     },
//   });
  


function CVfetch() {

    const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState(null);
  
  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/cv/getCVData', {
          params: {
            userId: currentUser.id // Pass current user's ID as a query parameter
          }
        });
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching CV data:', error);
      }
    };

    if (currentUser) {
      fetchCVData();
    }
  }, [currentUser]);

  

  return (
    
   
    <div>
      <meta charSet="UTF-8" />
      <title>Curriculum Vitae</title>
      <link href="css/form.css" rel="stylesheet" type="text/css" />

      <div className="zf-templateWidth">
        {/*-------template Header Starts Here--------*/}
        <div className="zf-templateWrapper">
          <ul className="zf-tempHeadBdr">
            <li className="zf-tempHeadContBdr">
              <h2 className="zf-frmTitle">
                <em>Curriculum Vitae</em>
              </h2>
              <p className="zf-frmDesc">Your CV Information</p>
              <div className="zf-clearBoth" />
            </li>
          </ul>
          {/*-------template Header Ends Here--------*/}
          <form>
            {/*-------template Container Starts Here--------*/}
            <div className="zf-subContWrap zf-leftAlign">
              <ul>
                {/* Name */}
                <li className="zf-tempFrmWrapper zf-name zf-namelarge">
                  <label className="zf-labelName">Name</label>
                  <div className="zf-tempContDiv zf-twoType">
                    <div className="zf-nameWrapper">
                      <span>
                        First: {formData && formData.Name_First}
                      </span>
                      <span>
                        Last: {formData && formData.Name_Last}
                      </span>
                      <div className="zf-clearBoth" />
                    </div>
                    <p id="Name_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* Email */}
                <li className="zf-tempFrmWrapper zf-small">
                  <label className="zf-labelName">Email</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.Email}
                    </span>
                    <p id="Email_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* CGPA */}
                <li className="zf-tempFrmWrapper zf-small">
                  <label className="zf-labelName">CGPA</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.cgpa}
                    </span>
                    <p id="CGPA_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* Course */}
                <li className="zf-tempFrmWrapper zf-small">
                  <label className="zf-labelName">Course</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.course}
                    </span>
                    <p id="Course_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* University */}
                <li className="zf-tempFrmWrapper zf-small">
                  <label className="zf-labelName">University</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.university}
                    </span>
                    <p id="University_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* Experience */}
                <li className="zf-tempFrmWrapper zf-large">
                  <label className="zf-labelName">Experience</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.experience}
                    </span>
                    <p id="Experience_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
                {/* Co-curriculars */}
                <li className="zf-tempFrmWrapper zf-large">
                  <label className="zf-labelName">Co-curriculars</label>
                  <div className="zf-tempContDiv">
                    <span>
                      {formData && formData.cocurriculars}
                    </span>
                    <p id="CoCurriculars_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                  </div>
                  <div className="zf-clearBoth" />
                </li>
              </ul>
            </div>
            {/*-------template Container Ends Here--------*/}
          </form>
        </div>
        {/* 'zf-templateWrapper' ends */}
      </div>
      {/* 'zf-templateWidth' ends */}
    </div>


  )
}

export default CVfetch
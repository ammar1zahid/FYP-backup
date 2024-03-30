import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./secondCV.css";
import "./secondCVfunc.js";
import { AuthContext } from '../../../context/authContext.jsx';

// Import your AuthContext



function SecondCV() {

  const { currentUser } = useContext(AuthContext);
console.log("currentuserid: ", currentUser.id)

  const navigateTo = useNavigate();
  // Initialize useHistory hook

  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    Email: '',
    cgpa: '',
    course: '',
    university: '',
    experience: '',
    cocurriculars: '',
    cvTemplateType: 'SecondCV'
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExNTMyMDM0fQ.wWMpWYannippNuMlp9CiAJ9i1JioT8Bapk2k7UpLVik";
    const response = await axios.post(
      "http://localhost:8800/api/cv/addCVData",
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the authentication token
        },
      }
    );

      
      // const response = await axios.post("http://localhost:8800/api/cv/addCVData", formData)

      console.log("responsedata: ",response.data);
      // Reset form fields if submission is successful
      setFormData({
        Name_First: '',
        Name_Last: '',
        Email: '',
        cgpa: '',
        course: '',
        university: '',
        experience: '',
        cocurriculars: '',
        cvTemplateType: ''
      });

      // Redirect user to CV page after successful form submission
      navigateTo('/CVlayout')
      

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


   


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };





  return (
    <>
    
    <div>
  <meta charSet="UTF-8" /><title>Curriculum Vitae</title>
  <link href="css/form.css" rel="stylesheet" type="text/css" />
  
  

  <div className="zf-templateWidth">
   
     
      
      {/*-------template Header Starts Here--------*/}
      <div className="zf-templateWrapper">
        <ul className="zf-tempHeadBdr"><li className="zf-tempHeadContBdr"><h2 className="zf-frmTitle">
          <em>Curriculum Vitae</em></h2>

            <p className="zf-frmDesc">Enter your details below to create your CV</p>

            <div className="zf-clearBoth" /></li></ul>
            {/*-------template Header Ends Here--------*/}
        
        
        
        <form onSubmit={handleSubmit}>

        {/*-------template Container Starts Here--------*/}
        <div className="zf-subContWrap zf-leftAlign"><ul>
           
           
           
            {/*-------Name Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-name zf-namelarge">

              <label className="zf-labelName"> 
                Name 
              </label>

              <div className="zf-tempContDiv zf-twoType">
                <div className="zf-nameWrapper">

                  <span> 
                  <input type="text" 
                  // maxLength={255} 
                  name="Name_First" 
                  // fieldtype={7} 
                  placeholder

                  value={formData.Name_First} onChange={handleChange}

                  /> 

                  <label>First</label>
                  </span> 

                  <span> <input type="text" 
                  // maxLength={255} 
                  name="Name_Last" 
                  // fieldtype={7} 
                  placeholder 
                  
                  value={formData.Name_Last} onChange={handleChange}
                  /> 
                  <label>Last</label>
                  </span> 

                  <div className="zf-clearBoth" /></div><p id="Name_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div>

              <div className="zf-clearBoth" />
              
              </li>
              {/*-------Name Ends Here--------*/} 
           
           
           
            {/*-------Email Starts Here--------*/}  
            <li className="zf-tempFrmWrapper zf-small">
              
              <label className="zf-labelName"> 
                Email 
              </label>

              <div className="zf-tempContDiv">
                <span> <input 
                // fieldtype={9} 
                type="text" 
                // maxLength={255} 
                name="Email" 
                checktype="c5" 
                defaultValue placeholder 
                
                value={formData.Email} onChange={handleChange}
                
                /></span> <p id="Email_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div>
              <div className="zf-clearBoth" />
              
              </li>
              {/*-------Email Ends Here--------*/}  
           
           

            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section">
              <h2>Education</h2>
              <p />
              </li>{/*-------Section Ends Here--------*/} 


            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-small">
              <label className="zf-labelName"> 
                CGPA: 
              </label>

              <div className="zf-tempContDiv">
                <span> <input type="text" name="cgpa" 
                checktype="c1" 
                // defaultValue 
                // maxLength={255} 
                // fieldtype={1} 
                placeholder 
                
                value={formData.cgpa} onChange={handleChange}
                
                /></span> <p id="SingleLine1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Single Line Ends Here--------*/}
            
            
            
            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-small"><label className="zf-labelName"> 
                Course: 
              </label>

              <div className="zf-tempContDiv">
                <span> <input type="text" name="course" 
                checktype="c1" 
                // defaultValue maxLength={255} 
                // fieldtype={1} 
                placeholder 
                
                value={formData.course} onChange={handleChange}
                
                /></span> <p id="SingleLine3_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Single Line Ends Here--------*/}
            
            
            
            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-small"><label className="zf-labelName"> 
                University: 
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="university" 
                checktype="c1" 
                // defaultValue maxLength={255} 
                // fieldtype={1} 
                placeholder 
                
                value={formData.university} onChange={handleChange}
                
                /></span> <p id="SingleLine2_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Single Line Ends Here--------*/}
            
            
            
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section">
              <h2>Experience</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
            
            
            
            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                {/* Employee ID  */}
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="experience"
                 checktype="c1" 
                //  defaultValue maxLength={255} 
                //  fieldtype={1} 
                 placeholder 
                 
                 value={formData.experience} onChange={handleChange}
                 
                 /></span> <p id="SingleLine_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div>
              <div className="zf-clearBoth" />
              </li>{/*-------Single Line Ends Here--------*/}
            
            
            
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section">
              <h2>Co-curriculars</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
            
            
            
            {/*-------Multiple Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
              </label>
              {/* <div className="zf-tempContDiv">
                <span> <textarea name="MultiLine" checktype="c1" maxLength={65535} placeholder defaultValue={""} /> </span><p id="MultiLine_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div> */}

              <div className="zf-tempContDiv">
                <span> <input type="text" name="cocurriculars" 
                checktype="c1" 
                // defaultValue maxLength={255} 
                // fieldtype={1} 
                placeholder 
                
                value={formData.cocurriculars} onChange={handleChange}
                
                /></span> <p id="SingleLine_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div>

              <div className="zf-clearBoth" /></li>
              {/*-------Multiple Line Ends Here--------*/}
          </ul></div>{/*-------template Container Starts Here--------*/}
       

          <input
  type="text"
  name="cvTemplateType"
  value={formData.cvTemplateType} onChange={handleChange}

  // value={"SecondCV"} onChange={handleChange}
  // value="SecondCV" 

  // Fixed value for the CV template type
  readOnly // Prevents user input
  // value={formData.Name_First} onChange={handleChange}
  // START FROM HERE IWJFIWOHJFIDEHWFIWHI
  style={{color: "white", borderColor: 'white', borderTopWidth: 0, borderLeftWidth: 0}}
/>


       
        <ul>
          <li className="zf-fmFooter">
          <button type='submit' className="zf-submitColor">Submit</button>
          </li>

        </ul>
        </form>
        </div>
        {/* 'zf-templateWrapper' ends */}
        
        
        
        </div>
        {/* 'zf-templateWidth' ends */}
        
</div>


 </>


  )
}

export default SecondCV


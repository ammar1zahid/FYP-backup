import React, { useEffect, useState } from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
import '../vendor/devicons/css/devicons.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css'
import '../css/resume.min.css'

function AboutP() {

  const [socialLinks, setSocialLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [error, setError] = useState('');



const handleRemoveIcon = (linkToRemove) => {
  const updatedLinks = socialLinks.filter((link) => link.url !== linkToRemove);
  setSocialLinks(updatedLinks);
};

const handleGenerateIcon = () => {
  // Reset error message
  setError('');

  // Validate if a link is provided
  if (!newLink) {
    setError('Please enter a social media link');
    return;
  }

  // Check if the link already exists
  if (socialLinks.some((link) => link.url === newLink)) {
    setError('Link already added');
    return;
  }

  // Determine which social media platform the user provided the link for
  let icon = null;
  if (newLink.includes('facebook.com')) {
    icon = (
      <li className="list-inline-item" key={newLink}>
        <a href={newLink} target="_blank" rel="noopener noreferrer">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-facebook fa-stack-1x fa-inverse" />
          </span>
        </a>
        {/* <button style={{backgroundColor: "red"}} onClick={() => handleRemoveIcon(newLink)}>X</button> */}
      </li>
    );
  }
   else if (newLink.includes('twitter.com')) {
    icon = (
      <li className="list-inline-item" key={newLink}>
        <a href={newLink} target="_blank" rel="noopener noreferrer">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-twitter fa-stack-1x fa-inverse" />
          </span>
        </a>
        {/* <button style={{backgroundColor: "red"}} onClick={() => handleRemoveIcon(newLink)}>X</button> */}
      </li>
    );
  }  
  else if (newLink.includes('github.com')) {
    icon = (
      <li className="list-inline-item" key={newLink}>
        <a href={newLink} target="_blank" rel="noopener noreferrer">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-github fa-stack-1x fa-inverse" />
          </span>
        </a>
        {/* <button style={{backgroundColor: "red"}} onClick={() => handleRemoveIcon(newLink)}>X</button> */}
      </li>
    );
  }
 else if (newLink.includes('linkedin.com')) {
  icon = (
    <li className="list-inline-item" key={newLink}>
      <a href={newLink} target="_blank" rel="noopener noreferrer">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
        </span>
      </a>
      {/* <button style={{backgroundColor: "red"}} onClick={() => handleRemoveIcon(newLink)}>X</button> */}
    </li>
  );
}
  
  else {
    setError('No such link found');
    return;
  }

  setSocialLinks([...socialLinks, { url: newLink, icon }]);
  setNewLink('');
};



  return (

    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">


{/* NAME */}
    <h1 className="mb-0">
      

        <input type="text" name='fullname' placeholder='Full Name' style={{ border: 'none' }}/>

      </h1>
{/* NAME */}

      {/* if else logic keh if empty from db then placeholder otherwise db data */}

{/* ADDRESS EMAIL NUM ETC */}
      <div className="subheading mb-5">
        
        
        {/* ADDRESS */}
        <input type="text" name='address' placeholder='Address' style={{ border: 'none' }}/>
        · 


        {/* NUMBER */}
        <input type="text" name='number' placeholder='Contact Number' style={{ border: 'none' }}/>
        ·

        {/* EMAIL */}
        <a href="mailto:name@email.com">
            
            <input type="email" name='email' placeholder='Email' style={{ border: 'none' }}/>
        </a>
      </div>
{/* ADDRESS EMAIL NUM ETC */}


{/* ABOUT MYSELF TUTAL PUTAL*/}
      <p className="mb-5">

      {/* I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.  */}
      {/* Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. */}
      
      <input type="text" name='aboutParagraph' placeholder='About Myself' style={{ border: 'none' }}/>
      
      </p>
{/* ABOUT MYSELF TUTAL PUTAL*/}



{/* SOCIAL ICONS */}

<div>
    <input
      type="text"
      value={newLink}
      onChange={(e) => setNewLink(e.target.value)}
      placeholder="Social Media Link"
    />
    <button onClick={handleGenerateIcon}>Generate Icon</button>
    {error && <p>{error}</p>}
    <ul className="list-inline list-social-icons mb-0">
      {/* Display all generated icons */}
      {socialLinks.map((link) => (
        // <React.Fragment key={link.url}>
        //   {link.icon}
        // </React.Fragment>
        <li className="list-inline-item" key={link.url}>
          {link.icon}
          <button style={{backgroundColor: "red"}} onClick={() => handleRemoveIcon(link.url)}>
            X
          </button>
        </li>
      ))}
    </ul>
  </div>

{/* SOCIAL ICONS */}



    </div>
  </section>

  )
}

export default AboutP
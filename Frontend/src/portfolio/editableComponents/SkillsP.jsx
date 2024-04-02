import React, { useState } from 'react';
import '../vendor/devicons/css/devicons.min.css'



function SkillsP() {

  const [skill, setSkill] = useState('');
  const [iconClassList, setIconClassList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const generateIcon = () => {
    const skillIcons = {
      python: 'devicons devicons-python',
      html: 'devicons devicons-html5',
      css: 'devicons devicons-css3',
      // Add more mappings for other skills as needed
    };

    const iconClass = skillIcons[skill.toLowerCase()];
    if (!iconClass) {
      setErrorMessage('Icon not available');
      return;
    }

    if (iconClassList.includes(iconClass)) {
      setErrorMessage('Skill already added');
      return;
    }

    setIconClassList([...iconClassList, iconClass]);
    setSkill('');
    setErrorMessage('');
  };

  const removeIcon = (index) => {
    const updatedIcons = [...iconClassList];
    updatedIcons.splice(index, 1);
    setIconClassList(updatedIcons);
  };

  return (
    
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <div>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter skill name"
          />
          <button onClick={generateIcon}>Generate Icon</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <ul className="list-inline list-icons">
          {iconClassList.map((iconClass, index) => (
            <li key={index} className="list-inline-item">
              <i className={iconClass} />
              <button onClick={() => removeIcon(index)} style={{backgroundColor: "red", fontSize: "10px"}}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </section>

  )
}

export default SkillsP


{/* <li className="list-inline-item">
          <i className="devicons devicons-css3" />
        </li> */}


      {/* <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <i className="fa-li fa fa-check" />
          Mobile-First, Responsive Design
        </li>
        <li>
          <i className="fa-li fa fa-check" />
          Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <i className="fa-li fa fa-check" />
          Cross Functional Teams
        </li>
        <li>
          <i className="fa-li fa fa-check" />
          Agile Development &amp; Scrum
        </li>
      </ul>
    </div>
  </section> */}
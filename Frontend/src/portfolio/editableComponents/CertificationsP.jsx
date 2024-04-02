import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';



function CertificationsP() {


    const [certifications, setCertifications] = useState([{ id: 1 }]);

    const addCertification = () => {
        const newId = certifications.length + 1;
        setCertifications([...certifications, { id: newId }]);
    };

    const removeCertification = idToRemove => {
        const updatedCertifications = certifications.filter(certification => certification.id !== idToRemove);
        setCertifications(updatedCertifications);
    };



  return (
    
         <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Certifications">
        <div className="my-auto">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            
          <div>
            {certifications.map(certification => (
                <div key={certification.id}>
                    <li>
                        <FontAwesomeIcon icon={faCertificate} style={{ color: "#dadd36" }} />
                        <input
                            type="text"
                            name="certificateTitle"
                            placeholder='Certification Name'
                            style={{ border: 'none' }}
                        />

                    </li>
                    {/* <p></p> */}
                    <input
                        type="text"
                        name="certificateInfo"
                        placeholder='Certification Description'
                        style={{ border: 'none' }}
                    />
                    <button onClick={() => removeCertification(certification.id)} style={{float: "right"}}>Remove</button>
                </div>
            ))}
            <button onClick={addCertification}>Add More</button>
            
        
        </div>
        
        
        
          </ul>
          
        </div>
        

      </section> 

  )
}

export default CertificationsP
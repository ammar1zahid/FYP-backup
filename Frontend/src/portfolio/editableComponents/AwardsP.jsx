import React, { useState }  from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
import '../vendor/devicons/css/devicons.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css'
import '../css/resume.min.css'

function AwardsP() {


    const [awards, setAwards] = useState([
        {
            id: 1,
            title: '',
            description: ''
        }
    ]);

    const handleAddMore = () => {
        const newId = awards.length + 1;
        setAwards([...awards, { id: newId, title: '', description: '' }]);
    };

    const handleRemove = (id) => {
        const updatedAwards = awards.filter(award => award.id !== id);
        setAwards(updatedAwards);
    };

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        const updatedAwards = awards.map(award => {
            if (award.id === id) {
                return { ...award, [name]: value };
            }
            return award;
        });
        setAwards(updatedAwards);
    };


  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Awards">
    <div className="my-auto">
    
      <h2 className="mb-5">Awards</h2>
      
      
      <ul className="fa-ul mb-0">
      
      <div>
            {awards.map(award => (
                <div key={award.id}>

                    <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                        
                        <input
                            type="text"
                            name="title"
                            placeholder="Award Title"
                            value={award.title}
                            onChange={(e) => handleChange(award.id, e)}
                            style={{ border: 'none' }}
                        />
                        
                    </li>
                    </ul>
                    
                    <input
                        type="text"
                        name="description"
                        placeholder="Award Description"
                        value={award.description}
                        onChange={(e) => handleChange(award.id, e)}
                        style={{ border: 'none' }}
                    />
                    <button onClick={() => handleRemove(award.id)} style={{float: "right"}}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddMore}>Add More</button>
        </div>

      </ul>
    </div>
  </section>
  )
}

export default AwardsP
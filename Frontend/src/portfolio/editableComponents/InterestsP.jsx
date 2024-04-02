import { useState } from "react"
import React from 'react'


function InterestsP() {


    const [paragraphs, setParagraphs] = useState([{
        id: 1,
        para1: '',
        para2: ''
    }]);

    const handleAddMore = () => {
        const newItem = {
            id: paragraphs.length + 1,
            para1: '',
            para2: ''
        };
        setParagraphs(prevState => [...prevState, newItem]);
    };

    const handleRemove = (id) => {
        setParagraphs(prevState => prevState.filter(item => item.id !== id));
    };

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        const updatedItems = paragraphs.map(item => {
            if (item.id === id) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setParagraphs(updatedItems);
    };



  return (
    
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>

          <div>
            {paragraphs.map(item => (
                <div key={item.id} className="mb-5">
                    {/* paragraph 1 */}
                    <p>
                        <input
                            type="text"
                            name="para1"
                            placeholder="Paragraph 1"
                            style={{ border: 'none' }}
                            value={item.para1}
                            onChange={(e) => handleChange(item.id, e)}
                        />
                    </p>
                    {/* paragraph 2 */}
                    <p className="mb-0">
                        <input
                            type="text"
                            name="para2"
                            placeholder="Paragraph 2"
                            style={{ border: 'none' }}
                            value={item.para2}
                            onChange={(e) => handleChange(item.id, e)}
                        />
                    </p>
                    {/* Remove button */}
                    <button onClick={() => handleRemove(item.id)} style={{float: "right"}}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddMore}>Add More</button>
        </div>
        
        </div>
      </section>

  )
}

export default InterestsP
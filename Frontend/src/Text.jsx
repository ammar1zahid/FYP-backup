import React, { useState } from 'react';
import "./text.css"

function Text() {

  // Sample data for resume templates
  const templates = [
    { id: 1, name: 'Professional', image: 'template1.jpg' },
    { id: 2, name: 'Modern', image: 'template2.jpg' }
  ];

  // State to track selected template
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Function to handle template selection
  const selectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
  };


  return (
    
    <div className="App">
      <h1>Resume Templates</h1>
      <div className="template-list">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-item ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => selectTemplate(template.id)}
          >
            <img src={template.image} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
      <div className="editor">
        {selectedTemplate && (
          <div>
            <h2>Edit Your Resume</h2>
            {/* Add your resume editor component here */}
            <p>You selected: {templates.find(template => template.id === selectedTemplate).name}</p>
          </div>
        )}
      </div>
    </div>
  
  )
}

export default Text
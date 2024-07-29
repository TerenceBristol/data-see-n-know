import React, { useState } from 'react';
import Papa from 'papaparse';

// This is a functional component named FileUpload
const FileUpload = ({ onDataUploaded }) => {
  // useState is a React Hook that lets us add state to our component
  // Here, we're creating a state variable 'file' and a function to update it 'setFile'
  const [file, setFile] = useState(null);

  // This function will be called when a file is selected
  const handleFileChange = (e) => {
    // e.target.files[0] contains the selected file
    setFile(e.target.files[0]);
  };

  // This function will be called when the upload button is clicked
  const handleUpload = () => {
    if (file) {
      // Papa.parse is a function from the PapaParse library that parses CSV files
      Papa.parse(file, {
        complete: (result) => {
          // When parsing is complete, we call the onDataUploaded function
          // that was passed as a prop to this component
          onDataUploaded(result.data);
        },
        header: true // This tells PapaParse that our CSV has a header row
      });
    }
  };

  // The component returns some JSX (which looks like HTML) to render
  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
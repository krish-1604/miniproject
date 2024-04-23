import React, { useState } from 'react';
import Navbar from './navbar';
import './report.css';
import Footer from './Footer';
import holder from '../assets/Group 37.png';

const ReportIncident = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle the file upload logic here
    console.log('Selected File:', selectedFile);
    // You can send the selected file to your backend or perform any other actions
  };

  return (
    <div className='reportIncident'>
      <Navbar />
      <h1 className='reportHeading'>Report Incident</h1>
      <div className='reportInputs'>
        <span>Register</span>
        <br/><br/>
        <label className='fieldLabel'>Choose Category</label>
        <br/>
        <select className='inputField'>
          <option value='Category1'>Category 1</option>
          <option value='Category2'>Category 2</option>
          <option value='Category3'>Category 3</option>
        </select>
        <br/>
        <label className='fieldLabel'>Location</label>
        <br/>
        <input type='text' className='inputField'/>
        <br/>
        <label className='fieldLabel'>City</label>
        <br/>
        <input type='text' className='inputField'/>
        <br/>
        <label className='fieldLabel'>Pincode</label>
        <br/>
        <input type='text' className='inputField'/>
        <br/>
        <label className='fieldLabel'>Describe the Problem</label>
        <br/>
        <input type='text' className='inputField' id='des'/>
        <br/>
        <label className='fieldLabel'>Upload Photos</label>
        <br/>
        {/* Use input type file for uploading photos */}
        <input
          type='file'
          className='inputField'
          id='upload'
          accept='image/*'
          onChange={handleFileChange}
        />
        <br/>
        <button type='button' className='reportSubmit' onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default ReportIncident;

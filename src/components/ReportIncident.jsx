import React, { useContext, useState } from 'react';
import Navbar from './navbar';
import './report.css';
import NavbarComponent from './LoggedNavBar';

const ReportIncident = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!category) {
      newErrors.category = 'Category is required';
    }
    if (!location) {
      newErrors.location = 'Location is required';
    }
    if (!city) {
      newErrors.city = 'City is required';
    }
    if (!pincode) {
      newErrors.pincode = 'Pincode is required';
    }
    if (!description) {
      newErrors.description = 'Description is required';
    }
    if (!selectedFile) {
      newErrors.file = 'Please upload a photo';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className='reportIncident'>
      <Navbar />;
      <h1 className='reportHeading'>Report Incident</h1>
      <div className='reportInputs'>
        <span>Register</span>
        <br/><br/>
        <div className="inputContainer">
          <label className='fieldLabel'>Choose Category</label>
          <br/>
          <select className='inputField' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select Category</option>
            <option value='Category1'>Category 1</option>
            <option value='Category2'>Category 2</option>
            <option value='Category3'>Category 3</option>
          </select>
          {errors.category && <div className="error">{errors.category}</div>}
        </div>
        <br/>
        <div className="inputContainer">
          <label className='fieldLabel'>Location</label>
          <br/>
          <input type='text' className='inputField' value={location} onChange={(e) => setLocation(e.target.value)}/>
          {errors.location && <div className="error">{errors.location}</div>}
        </div>
        <br/>
        <div className="inputContainer">
          <label className='fieldLabel'>City</label>
          <br/>
          <input type='text' className='inputField' value={city} onChange={(e) => setCity(e.target.value)}/>
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <br/>
        <div className="inputContainer">
          <label className='fieldLabel'>Pincode</label>
          <br/>
          <input type='text' className='inputField' value={pincode} onChange={(e) => setPincode(e.target.value)}/>
          {errors.pincode && <div className="error">{errors.pincode}</div>}
        </div>
        <br/>
        <div className="inputContainer">
          <label className='fieldLabel'>Describe the Problem</label>
          <br/>
          <input type='text' className='inputField' id='des' value={description} onChange={(e) => setDescription(e.target.value)}/>
          {errors.description && <div className="error">{errors.description}</div>}
        </div>
        <br/>
        <div className="inputContainer">
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
          {errors.file && <div className="error">{errors.file}</div>}
        </div>
        <br/>
        <button type='button' className='reportSubmit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReportIncident;

import React, { useContext, useState } from 'react';
import Navbar from './navbar';
import './report.css';
import NavbarComponent from './LoggedNavBar';
import firebase, { database, storage } from './firebaseConfig';

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
      
      const incidentRef = database.ref('incidents');
      const newIncident = {
        category,
        location,
        city,
        pincode,
        description,
        imageURL: '', 
      };

      incidentRef.push(newIncident)
        .then((snapshot) => {
          console.log('Incident reported successfully');
          if (selectedFile) {
            handleImageUpload(snapshot.key); 
          } else {
          }
        })
        .catch((error) => {
          console.error('Error reporting incident:', error);
        });
    }
  };

  const handleImageUpload = (incidentKey) => {
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`incident_images/${incidentKey}/${selectedFile.name}`);

    imageRef.put(selectedFile)
      .then((snapshot) => {
        console.log('Image uploaded successfully');
        // Get download URL and update imageURL in incident data
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          const updatedIncident = { imageURL: downloadURL };
          database.ref(`incidents/${incidentKey}`).update(updatedIncident)
            .then(() => {
              console.log('Incident reported with image URL');
             
            })
            .catch((error) => {
              console.error('Error updating incident with image URL:', error);
              
            });
        });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        
      });
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
          <input type='number' className='inputField' value={pincode} onChange={(e) => setPincode(e.target.value)}/>
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

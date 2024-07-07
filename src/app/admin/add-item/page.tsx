"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddItemPage() {
  const [file, setFile] = useState('');

  const handleFileChange = (e:any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video', file);

    axios.post('api', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Video uploaded successfully:', response.data);
    })
    .catch(error => {
      console.error('Error uploading video:', error);
    });
  };
  return (
    // accept="image/png, image/gif, image/jpeg"
    <div className="flex h-full">
   <form onSubmit={handleSubmit}>
    <div className=''>
    <input type="file" onChange={handleFileChange} accept="video/*"  />
    </div>
      <button type="submit">Upload Video</button>
    </form>
  </div>
  )
}

export default AddItemPage
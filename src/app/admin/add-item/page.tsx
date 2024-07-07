"use client"
import { Box, Modal } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";
import { VscChromeClose } from 'react-icons/vsc';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function AddVideo() {
  const [videoPreview, setVideoPreview] = useState('');
  const [users,setUsers] =  useState([])
  const [selectedVideoType, setSelectedVideoType] = useState('');
  const [typeId, setTypeId] = useState('');

  const handleSelect = (type:any , id:any) => {
    setSelectedVideoType(type);
    setTypeId(id)
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  useEffect(() => {
    axios
      .get("https://lobster-app-225yp.ondigitalocean.app/api/video-type")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  const handleVideoUpload = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
    }
  };

  return (
    <div>
        <Modal
      open={openAdd}
      onClose={handleCloseAdd}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-medium">Elave edin</h1>
            <button
              type="button"
              onClick={handleCloseAdd}
              className="p-1 flex items-center justify-center border border-gray-300 border-solid rounded-full"
            >
              <VscChromeClose />
            </button>
          </div>
          <div className="flex flex-col gap-3 justify-between">
            {users.map((item:any) => (
              <div
                key={item._id}
                className={`p-2 border border-gray-300 rounded-md cursor-pointer ${
                  selectedVideoType === item.video_type ? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => handleSelect(item.video_type , item._id)}
              >
                <input
                  type="radio"
                  id={item._id}
                  name="videoType"
                  value={item.video_type}
                  checked={selectedVideoType === item.video_type}
                  onChange={() => handleSelect(item.video_type , item._id)}
                  className={`mr-2 ` }
                />
                <label htmlFor={item._id}                   className={` ${selectedVideoType === item.video_type ? "text-white" : "text-black"} ` }
                >
                  {item.video_type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
      <form className='flex flex-col gap-5'>
        <div >
          {
             videoPreview ? (
              <div className='flex flex-col gap-2'>
                <label className='text-black font-medium text-xl'>Video Preview</label>
                <video src={videoPreview} controls className='w-full h-60 border border-gray-300 rounded-md' />
              </div> 
            ) : (
              <div className='flex flex-col gap-2'>
                  <label htmlFor="videoUpload" className='text-black font-medium text-xl'>Upload Video</label>
          <input
            type='file'
            accept="video/*"
            onChange={handleVideoUpload}
            className='h-20 border border-gray-300 bg-white w-full rounded-md'
          />
              </div>
            )
          }
        
        </div>
       
        <div className='flex flex-col gap-2'>
          <label htmlFor="videoTitle" className='text-black font-medium text-xl'>Video Title</label>
          <input type='text' placeholder='video title' className='h-[52px] text-gray-700 px-4' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="videoType" className='text-black font-medium text-xl'>Video Type</label>
          {
            selectedVideoType ? <button type='button' onClick={handleOpenAdd} className=' border flex-row justify-between border-gray-300 bg-white   w-full rounded-md h-[52px] text-blue-500 font-medium px-4 flex items-center'>
            {selectedVideoType} 
           </button> :  <button type='button' onClick={handleOpenAdd} className=' border flex-row justify-between border-gray-300 bg-white   w-full rounded-md h-[52px] text-gray-500 px-4 flex items-center'>
           Select Video Type  
           <SlArrowDown/>
          </button>
          }
         
         </div>
        <button type='submit' className='px-4 py-3 rounded-md bg-blue-600 text-white font-medium'>Create Video</button>
      </form>
    </div>
  );
}

export default AddVideo;

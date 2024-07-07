"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowBack } from "react-icons/io";

function Navbar() {
  const [showProduct,setShowProduct] =  useState(false)
function handleShowProduct() {
  setShowProduct(!showProduct)
  
}
  return (
<nav className='flex flex-col justify-between  h-full py-10'>
<div className='flex flex-col gap-2 bg-white  h-full  '>
  <Link href={'/admin/dashboard'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
          Dashboard
         </Link>
        
         <div className='flex flex-col gap-2 items-start w-full '>
         <button type='button' onClick={handleShowProduct} className='hover:bg-main-color-50   items-center flex flex-row justify-between text-start w-full hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         <div>Videolar</div>        { 
          showProduct ?  <IoIosArrowUp className='text-xl'/>  : <IoIosArrowDown className='text-xl'/>
        }
        
       </button>
       {
         showProduct ? <div className='px-5 duration-500 flex flex-col gap-2 w-full' >
           <Link href={'/admin/videos'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Videolar
        </Link> 
        <Link href={'/admin/add-item'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Video Əlavə Et
        </Link> 
        <Link href={'/admin/video-type'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Video Type Et
        </Link> 
         </div>: null
       }
      
        </div>
                <Link href={'/admin/users'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1   '>
          Users         </Link>
          <Link href={'/admin/faqs'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1   '>
          FAQ         </Link>
  </div>
  <button type='button' className='px-4 py-3 hover:bg-red-50 hover:text-red-500 flex flex-row justify-between items-center'>
    <div className=" text-sm font-semibold font-['Public Sans'] leading-tight tracking-tight">Hide Menu</div>
    <IoIosArrowBack className='text-xl'/>
  </button>
</nav>
)
}

export default Navbar

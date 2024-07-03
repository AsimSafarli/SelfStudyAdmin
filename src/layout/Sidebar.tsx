"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

function Navbar() {
const [showProduct,setShowProduct] =  useState(false)
function handleShowProduct() {
  setShowProduct(!showProduct)
  
}
  return (
    <nav className='flex flex-col gap-2 bg-white border border-solid border-gray-300 h-full py-10 '>
      <Link href={'/admin/dashboard'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Dashboard
        </Link>
        <Link href={'/admin/order'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Sifariş
        </Link>
        
        <div className='flex flex-col gap-2 items-start w-full '>
        <button type='button' onClick={handleShowProduct} className='hover:bg-main-color-50   items-center flex flex-row justify-between text-start w-full hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
        <div>Videolar</div>
        { 
          showProduct ?  <IoIosArrowUp className='text-xl'/>  : <IoIosArrowDown className='text-xl'/>
        }
        
       </button>
       {
         showProduct ? <div className='px-5 duration-500 flex flex-col gap-2 w-full' >
           
        <Link href={'/admin/add-item'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Video Elave Et
        </Link> 
        <Link href={'/admin/videos'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Videolar
        </Link> 
         </div>: null
       }
      
        </div>
      
       
        <Link href={'/admin/category'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Category
        </Link>
        <Link href={'/admin/users'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1   '>
         Users
        </Link>
    </nav>
  )
}

export default Navbar
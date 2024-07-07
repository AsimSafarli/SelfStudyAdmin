"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function Navbar() {
  const [showProduct,setShowProduct] =  useState(false)
function handleShowProduct() {
  setShowProduct(!showProduct)
  
}
  return (
 <nav className='flex flex-col gap-2 bg-white  h-full py-10 '>
  <Link href={'/admin/dashboard'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
          Dashboard
         </Link>
        
         <div className='flex flex-col gap-2 items-start w-full '>
         <button type='button' onClick={handleShowProduct} className='hover:bg-main-color-50   items-center flex flex-row justify-between text-start w-full hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         <div>Məhsullar</div>        { 
          showProduct ?  <IoIosArrowUp className='text-xl'/>  : <IoIosArrowDown className='text-xl'/>
        }
        
       </button>
       {
         showProduct ? <div className='px-5 duration-500 flex flex-col gap-2 w-full' >
           <Link href={'/admin/videos'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Məhsullar
        </Link> 
        <Link href={'/admin/add-item'} className=' w-full hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1  '>
         Məhsul Əlavə Et
        </Link> 
         </div>: null
       }
      
        </div>
                <Link href={'/admin/users'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1   '>
          Users         </Link>
          <Link href={'/admin/faqs'} className='hover:bg-main-color-50 hover:text-main-color-500  hover:border-transparent   text-black px-4 py-1   '>
          FAQ         </Link>
  </nav>
)
}

export default Navbar

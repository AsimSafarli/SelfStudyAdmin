import Link from 'next/link';
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { IoExitOutline } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";

function VideoPage() {
  return (
    <div className='px-6 py-8 flex flex-col gap-7'>
      <div className="w-full h-10 justify-start items-end gap-6 inline-flex">
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch text-neutral-800 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">Videos</div>
    </div>
    <div className="justify-start items-start gap-4 flex">
        <button type='button' className="px-3.5 py-2.5 bg-[#F0F1F3] rounded-lg justify-center items-center gap-1 flex">
               <IoExitOutline className='text-xl'/>
            <div className="text-neutral-800 text-sm font-semibold font-['Public Sans'] leading-tight tracking-tight">Export</div>
        </button>
        <Link href={'/admin/add-item'} className="px-3.5 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-1 flex">
            <FaPlus className='text-white'/>
            <div className="text-white text-sm font-semibold font-['Public Sans'] leading-tight tracking-tight">Add video</div>
        </Link>
    </div>
</div>
<div className="w-full h-10 gap-4 justify-between items-start inline-flex">
    <div className="h-10 w-full px-3  bg-white rounded-lg border border-zinc-200 justify-start items-center gap-1 flex">
           <CiSearch className='text-xl '/>
       <input type='text' placeholder='Search video. . .'  className='text-gray-400 py-2 px-4
text-sm w-full
font-normal'/> 
    </div>
    <div className="justify-start items-start gap-4 flex">
        <div className="px-3.5 py-2.5 bg-white rounded-lg border border-zinc-200 justify-center items-center gap-2 flex">
           <LiaFilterSolid  className='text-xl  text-[#667085]'/>
            <div className="text-[#667085] text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Filters</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default VideoPage
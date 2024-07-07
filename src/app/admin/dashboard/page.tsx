import React from 'react'
import { RiProfileFill } from 'react-icons/ri'
import { IoPersonOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";

function Dashboard() {
  return (
    <div className='flex flex-col gap-7'>
      <div className="w-[142px] h-10 justify-center items-center gap-8 inline-flex">
    <div className="justify-start items-center gap-4 flex">
        <div className="w-[126px] self-stretch justify-start items-center gap-3 flex">
            <div className="flex-col justify-start items-end inline-flex">
            </div>
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                <div className="text-zinc-950 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Asim Safarli</div>
                <div className="text-neutral-600 text-xs font-medium font-['Public Sans'] leading-[18px] tracking-tight">admin</div>
            </div>
        </div>
    </div>
</div>
      <div className='flex flex-row justify-between gap-2'>
        <div className=' border broder-solid border-gray-300   w-full px-6 py-4 rounded-md bg-white flex flex-col gap-2 '>
        <div className='flex text-[#777980] flex-row gap-2 items-center text-base'>
          <div className='bg-green-100 w-6 h-6 p-1  rounded-full flex items-center justify-center text-green-500'>
          <IoPersonOutline/>

          </div>
        Umumi istifadeci
        </div>
        <div>
          <h1 className='text-[32px] font-medium'>3,400</h1>
        </div>
        <div>
          <h1 className='text-sm text-gray-400 font-medium'>+15 today</h1>
        </div>
        </div>
        <div className=' border broder-solid border-gray-300   w-full px-6 py-4 rounded-md bg-white flex flex-col gap-2 '>
        <div className='flex text-[#777980] flex-row gap-2 items-center text-base'>
          <div className='bg-blue-100 w-6 h-6 p-1  rounded-full flex items-center justify-center text-blue-500'>
          <CiVideoOn/>

          </div>
        Umumi Video
        </div>
        <div>
          <h1 className='text-[32px] font-medium'>3,400</h1>
        </div>
        <div>
          <h1 className='text-sm text-gray-400 font-medium'>+15 today</h1>
        </div>
        </div>
      </div>
      <div className="w-full h-[534px] p-6 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-center gap-4 inline-flex">
    <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-800 text-xl font-semibold font-['Public Sans'] leading-[30px] tracking-tight">Top view video category</div>
            </div>
            <div className="text-zinc-500 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Top category in a period of time</div>
        </div>
        <div className="w-5 h-5 p-2 justify-center items-center gap-2 flex">
            <div className="w-4 h-4 relative" />
        </div>
    </div>
  
    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Smartphone</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">340 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$17,678</div>
                <div className="px-2 py-0.5 bg-emerald-50 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-teal-600 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">+12%</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Earphone</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">100 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$15,500</div>
                <div className="px-2 py-0.5 bg-rose-50 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-red-500 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">-5%</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Keyboard</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">50 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$10,500</div>
                <div className="px-2 py-0.5 bg-gray-100 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-neutral-600 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">0%</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Tablet</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">147 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$8,456</div>
                <div className="px-2 py-0.5 bg-emerald-50 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-teal-600 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">+19%</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Laptop</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">540 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$7,189</div>
                <div className="px-2 py-0.5 bg-rose-50 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-red-500 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">-25%</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">Mouse</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Public Sans'] leading-[18px] tracking-tight">345 Sales</div>
                </div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-800 text-sm font-medium font-['Public Sans'] leading-tight tracking-tight">$7,000</div>
                <div className="px-2 py-0.5 bg-emerald-50 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-teal-600 text-xs font-semibold font-['Public Sans'] leading-[18px] tracking-tight">+11%</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Dashboard
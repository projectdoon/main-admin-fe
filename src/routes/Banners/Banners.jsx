import React from 'react';
import { FileUploadIcon } from "hugeicons-react";

function Banners() {
  return (
    <div className='flex flex-col w-full h-full gap-1 -mt-0.5 2xl:mt-2'>
      <div className='flex flex-col gap-3 justify-center items-center w-full h-3/5'>
        <label htmlFor="upload" className="flex flex-col justify-center items-center w-1/3 h-48 bg-white rounded-2xl border-2 border-dashed border-[#3A81F1] cursor-pointer">
            <FileUploadIcon className='h-6 w-16 text-black' />
            <span className="text-lg font-semibold">Upload Banners</span>
            <span className='text-sm text-gray-400'>1009 x 1220</span>
        </label>
        <input id="upload" type="file" className="hidden" /> 
        <button className='text-white bg-[#3A81F1] px-6 py-1 w-1/3 rounded-full'>Submit</button>
      </div>
      
      <div className='flex flex-col justify-start w-full h-2/5'>
        <div className='text-sm font-semibold pl-16 -my-2.5'>Live Tracking</div>
        <div className='w-full h-full flex items-center justify-evenly'>
            <div className='w-1/4 h-3/4 bg-white border-2 border-[#3A81F1] rounded-2xl'></div>
            <div className='w-1/4 h-3/4 bg-white border-2 border-[#3A81F1] rounded-2xl'></div>
            <div className='w-1/4 h-3/4 bg-white border-2 border-[#3A81F1] rounded-2xl'></div>
        </div>
      </div>
    </div>
  );
}

export default Banners;

import React from 'react'
import { Call02Icon } from "hugeicons-react";
import DeleteIcon from '../../assets/Delete.png';

function Helpline() {

  const helplineNumbers = [
    {name: "Police", number: 100},
    {name: "Police", number: 100},
    {name: "Police", number: 100},
    {name: "Police", number: 100},
    {name: "Police", number: 100},
  ]

  return (
    <div className='flex flex-col justify-evenly py-10 px-8 gap-3 w-full h-full'>
      <div className='flex justify-center gap-5 w-full'>
        <div className='flex flex-col gap-2 w-[30%]'>
          <div className='text-xs'>Helpline Name</div>
          <input className='rounded-lg py-2.5 px-2 text-xs w-full' type="text" name="" id="" placeholder='Helpline name' />
        </div>
        <div className='flex flex-col gap-2 w-[30%]'>
          <div className='text-xs'>Helpline Number</div>
          <input className='rounded-lg py-2.5 px-2 text-xs w-full' type='number' name="" id="" placeholder='Helpline number' />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div>Live Numbers</div>
        <div className='flex justify-center text-xs'>
          <div className='w-[30%]'>Helpline Name</div>
          <div className='w-[30%] text-center 2xl:mr-7'>Helpline Number</div>
        </div>
        <div className='flex flex-col gap-5 overflow-y-scroll h-[33vh]'>
          {helplineNumbers.map((contact, ind) => {
            return (
              <div key={ind} className='p-4 py-2 flex justify-between items-center bg-white rounded-lg border-2'>
                <div className='w-[10%]'><Call02Icon /></div>
                <div className='text-sm w-[30%]'>{contact.name}</div>
                <div className='text-sm w-[30%] pl-5'>{contact.number}</div>
                <img src={DeleteIcon} alt="" className='h-9 w-9 mt-1' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Helpline
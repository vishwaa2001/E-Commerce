import React from 'react'

const Shimmer1 =()=>  {
   
  return (
    <div className=' flex justify-center '>
      <div className='mt-56 ml-10 bg-slate-300'>
        <img className='h-72  w-64 ' alt="" />
      </div>
      <div className='mt-56 ml-28 border-none w-[600px] h-[50vh] flex flex-col gap-3 bg-slate-300'>
        <p className='text-3xl font-bold uppercase'></p>
        <p className='text-lg font-bold text-gray-400 '></p>
        <p className='font-normal '></p>
        <p className='font-bold text-2xl  '></p>
        <div className='flex  gap-11 font-bold text-white '> 

      <button className='border w-40 h-11  bg-slate-400'></button>
      <button className='border w-40 h-11 bg-slate-400'></button>
        </div>

      </div>
    </div>
  )
  }

export default Shimmer1
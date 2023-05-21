import React from 'react'
import BMW from '../assets/BMW_M5.jpg'


const Banner = () => {
  return (
    <div className='h-[60vw] flex justify-center'>
      <div className='absolute w-full'>

        <img src={BMW} alt="" className=' items-center p-4 rounded-4xl ' />
      </div>

      <div className='relative flex flex-col items-center w-full pt-[5vw]'>
        <h1 className='text-white text-[35px] md:text-[55px] lg:text-[70px] font-bold'>Luxury Made Easy</h1>
        <p className='text-center text-[12px] md:text-[20px] lg:text-[25px] text-white font-semibold'>If your looking for a luxury chauffeuer or a self-drive.<br/>We've got you covered.</p>
        <div className='mt-[3vw] font-semibold text-base md:text-lg'>
          <button className='p-3 mx-5 text-white bg-[#5f51fc] rounded-lg'>Book Now</button>
          
          <button className='p-3 mx-5 text-white underline decoration-2 underline-ofset-2'>See All Cars</button>
        </div>
      </div>
    </div>
  )
}

export default Banner

{/* items-center object-cover p-4 rounded-4xl */}

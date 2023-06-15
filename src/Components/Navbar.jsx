import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='cursor-pointer flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'> {/* */}
    <h1 className='w-full text-3xl font-bold'>PINE AUTO</h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Vehicles</li>
      <li className='p-4'>Services</li>
      <li className='p-4'>Testimonials</li>
      <li className='p-4'>Web by Nav</li>
      <button className='bg-[#5f51fc] text-white px-5 mx-2 m-1 rounded-lg whitespace-nowrap'>Contact Us</button>
    </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden z-50' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold m-4'>PINE AUTO</h1>
        <ul className='p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Vehicles</li>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <li className='p-4 border-b border-gray-600'>Testimonials</li>
          <button className='bg-[#5f51fc] text-white p-3 m-1 mt-2 rounded-lg flex'>Contact Us</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar 
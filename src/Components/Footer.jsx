import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-800 h-[80vw] md:h-[15vw] m-4 items-center rounded-4xl text-white ">
      <div className="w-1/3 mx-4 text-center mb-4">
        <h1 className='mb-4 font-semibold'>COMPANY INFORMATION</h1>
        <ul className='select-text'>
            <li>Pine Auto</li>
            <li>Pine st, London </li>
            <li>9am - 6pm</li>
            <li>Call: 0123 456 7890</li>
            <li>Email: info@pineauto.com</li>
        </ul>
      </div>
      <div className="w-1/3 mx-4 mb-4 text-center">
        <h1 className=" mb-4 font-semibold">CUSTOMER SERVICE</h1>
        <ul className="cursor-pointer">
          <li className='hover:underline'>Terms & Conditions</li>
          <li className='hover:underline'>Contact Us</li>
          <li className='hover:underline'>Privacy Policy</li>
          <li className='hover:underline'>About Us</li>
          <li className='hover:underline'>Testimonials</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer




{/*import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 h-[40vw] md:h-[20vw] items-center m-4 rounded-4xl'>
        <div className='text-white'>
            <h1>COMPANY INFORMATION</h1>
            <ul>
                <li>Pine Auto</li>
                <li>Pine st, London </li>
                <li>9am - 6pm</li>
                <li>Call: 0123 456 7890</li>
                <li>Email: info@pineauto.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer*/}

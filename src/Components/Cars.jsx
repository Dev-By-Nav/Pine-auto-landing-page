import React from 'react'

import Audi from '../assets/Logo/Audi_logo.png'
import Bentley from '../assets/Logo/Bentley_logo.png'
import BMW from '../assets/Logo/BMW_logo.png'
import Jaguar from '../assets/Logo/jaguar_logo.png'
import Lamborghini from '../assets/Logo/Lamborghini_logo.png'
import Mercedes from '../assets/Logo/Mercedes_logo.png'
import Porsche from '../assets/Logo/Porsche_logo.png'
import RollsRoyce from '../assets/Logo/Rolls-Royce_logo.png'


const Cars = () => {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-8 gap-4  '>
        <img src={Audi} alt="" className='px-7' />
        <img src={Bentley} alt="" className='px-5 mt-2' />
        <img src={BMW} alt="" className='px-8'/>
        <img src={Jaguar} alt="" className='px-8'/>
        <img src={Lamborghini} alt="" className='px-8'/>
        <img src={Mercedes} alt="" className='px-8'/>
        <img src={Porsche} alt="" className='px-8'/>
        <img src={RollsRoyce} alt="" className='px-8'/>
    </div>
  )
}

export default Cars
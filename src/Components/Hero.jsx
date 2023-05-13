import React from 'react'
import Car from '../assets/Car_lineup.jpeg'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-md md:w-1/2 lg:w-2/5 md:pr-8 mb-8 md:mb-0">
        <img className="w-full h-auto rounded-2xl" src={Car} alt="" />
      </div>
      <div className="max-w-lg ">
        <h2 className="text-3xl font-bold mb-4">More than 100+ Luxury & Exotic cars available </h2>
        <p className="text-xl mb-8 font-mono">Drive the car of your dreams, in reality. Choose from over a 100 different luxury & exotic cars. Available same-day or next.</p>
        <button className="p-4 font-semibold text-base md:text-lg text-white bg-[#5f51fc] rounded-lg">Get In Touch</button>
      </div>
    </div>
  )
}

export default Hero

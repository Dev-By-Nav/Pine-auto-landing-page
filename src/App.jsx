import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Hero from './Components/Hero'
import Cars from './Components/Cars'
import Card from './Components/Card'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='select-none'>
      <Navbar />
      <Banner />
      <Cars />
      <Hero />
      <Card />
      <Footer />
    </div>
  )
}

export default App

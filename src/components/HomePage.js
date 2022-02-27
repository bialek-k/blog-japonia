import React from 'react'
import Hero from '../components/Hero'
import Islands from '../components/Islands'
import Articles from '../components/Articles'
import Favourite from '../components/Favourite'
import About from '../components/About'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
      <Hero />
      <Islands />
      <Articles />
      <Favourite />
      <About />
      <Footer />
    </>
  )
}

export default HomePage
import React from 'react'
import '../css/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="image"></div>
      <div className="container">
        <div className="menu">
          <ul>
            <li>Miasta</li>
            <li>Świątynie</li>
            <li>Kultura</li>
            <li>Natura</li>
            <li>Kontakt</li>
            <li></li>
          </ul>
        </div>
        <div className="header">
          <h1>Japonia</h1>
          <h2>kraj tysiąca wysp</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
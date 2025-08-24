import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_icon from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVAL ONLY</h2>
        <div className ="hand-hand-icon">
            <p>New</p>
          <img src={hand_icon} alt="Hand Icon" className='hand-icon'></img>
           </div>
          <p>collection</p>
          <p>for everyone</p>
          <button className='hero-latest-btn'>Shop Now <img src={arrow_icon} alt="Arrow Icon" className='arrow-icon'></img></button>
        </div>
          <div className='hero-right'>
            <img src={hero_icon} alt="Hero Icon" className='hero-icon'></img>
        </div>
    </div>
  )
}

export default Hero

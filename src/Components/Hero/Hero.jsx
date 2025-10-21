import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>i'm Clinton Orji,</span> frontend developer based in NIGERIA</h1>
        <p>i,m a frontend developer from port-hacourt, Nigeria with 5 years of experience I’ve had the chance to work with Google, where I helped launch projects that made a real impact. Along the way, I’ve learned to tackle challenges creatively, work well with teams, and deliver results I’m proud of. </p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    
    </div>
  )
}

export default Hero
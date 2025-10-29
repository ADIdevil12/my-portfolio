import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id="home"className='hero'>
        <img src={profile} alt=""></img>
        <h1><span>I'm Aditya Tambadkar,</span> frontend developer based in India</h1>
        <p>I am a frontend developer from Mumbai, India with 1 year of experience</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>

        </div>
    </div>
  )
}

export default Hero
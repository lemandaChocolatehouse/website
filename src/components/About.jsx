import React from 'react'
import AboutSection1 from './About Components/AboutSection1'
import AboutSection2 from './About Components/AboutSection2'
import AboutSec3 from './About Components/AboutSec3'
import AboutSec4 from './About Components/AboutSec4'
import Footer from './Footer'

const About = () => {
  return (
    <div className='about w-full pt-16 bebas tracking-wider'>
        <AboutSection1/>
        <AboutSection2/>
        <AboutSec3/>
        <AboutSec4/>
        <Footer/>
    </div>
  )
}

export default About
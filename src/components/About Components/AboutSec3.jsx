import React from 'react'

const AboutSec3 = () => {
  return (
    <div className='about-sec3 w-full pt-12 pb-10 bg-[#f5f5f5] px-5'>
      <div className="about-section2-top w-full py-10 px-2 text-center">
        <h2 className="text-3xl font-bold text-[#592D1E] tracking-tight">
          OUR TEAMS
        </h2>
        <h1 className="font-bold text-4xl mb-3 mt-3 tracking-tight">
          GREAT TEAM IN DIFFERENT SKILL
        </h1>
      </div>
      <div className="about-section3-btm-cards flex items-center justify-center gap-16 w-full">
        <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
          <img src="/assets/img/t1.png" alt="Team Member 1" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
          <img src="/assets/img/t4.png" alt="Team Member 2" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
          <img src="/assets/img/t3.png" alt="Team Member 3" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
          <img src="/assets/img/t2.png" alt="Team Member 4" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default AboutSec3

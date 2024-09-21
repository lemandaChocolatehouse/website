import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import AboutImage from "/assets/img/abt.jpg"; // Adjust the path if needed

const AboutSection1 = () => {
  const [showContent, setShowContent] = useState(false);

  const handleScrollClick = () => {
    setShowContent(!showContent); // Toggle the visibility of additional content
  };

  return (
    <div className="about-section1 w-full px-16 bg-[#F5F5F5] pb-10 mt-10 md:mt-0">
      <div className="about-section1-top w-full py-14 text-center">
        <h1 className="text-5xl mb-3">
          GOOD CHOCOLATE, GOOD MOOD
        </h1>
        <p className="roboto-r text-[#79869F]">
          The most important focus in growing a business and must be consistent
          over time to develop and improve
        </p>
      </div>
      <div className="about-section1-btm w-full h-[60vh] flex pt-6">
        <div className="about-section1-btm-left w-1/2 rounded-lg overflow-hidden shadow-lg shadow-[#9c9c9c]">
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="about-section1-btm-right w-1/2 px-20 py-2 flex flex-col gap-5">
          <h2 className="text-2xl  text-[#592D1E] ">OUR MISSION</h2>
          <h1 className="text-4xl ">WHAT'S A COMPANY PROFILE?</h1>
          <p className="text-[#79869F] leading-8 roboto-r pr-10 text-justify">
            In a kitchen filled with love and chocolate dreams, our brownie journey began. Born from a passion for baking perfection, we set out to create a haven for brownie enthusiasts. <br />
            Handcrafted Elegance
            Every batch is a masterpiece of simplicity and quality ingredients. Our brownies are not just treats; they're moments of pure bliss.
          </p>
 

          
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;

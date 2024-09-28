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
        <h1 className="text-5xl mb-3">GOOD CHOCOLATE, GOOD MOOD</h1>
        <p className="roboto-r text-[#79869F]">
          The most important focus in growing a business and must be consistent
          over time to develop and improve
        </p>
      </div>
      <div className="about-section1-btm w-full  flex pt-6">
        <div className="about-section1-btm-left w-1/2 rounded-lg overflow-hidden shadow-lg shadow-[#9c9c9c]">
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full text-center md:text-start md:w-1/2 md:px-20 py-10 md:py-2 flex flex-col gap-3">
         
          <h1 className="text-4xl  ">COMPANY PROFILE</h1>
         
          <h1 className="text-2xl md:text-3xl text-[#592D1E] mt-2">M/s Chocolate House</h1>
          <h1 className="text-black font-semibold  roboto-r ">
            {" "}
            <span className="font-bold text-[#79869F] text-base"> Founder:</span>
            {" "}Anuradha Chauhan (Chocolatier | Baker | Entrepreneur)
          </h1>
          <h1 className=" text-black font-semibold roboto-r ">
            <span className="font-bold text-[#79869F] text-base">Reg. No.:</span>{" "}
            {" "} 22720700000208
          </h1>
          <h1 className=" text-black font-semibold roboto-r ">
            <span className="font-bold text-[#79869F] text-base">
              UDYAM Reg. No.:{" "}
            </span>{" "}
             {" "}UDYAM-UP-29-0088509
          </h1>
           <h2 className="text-2xl md:text-3xl mt-6  text-[#592D1E] ">OUR MISSION</h2>
            <p className="text-[#79869F] md:leading-8 roboto-r md:pr-10 text-justify">
            To bring joy and indulgence through handcrafted chocolates, cookies, and baked goods, made with passion, love, and the finest ingredients. We aim to create moments of bliss and foster a sense of togetherness through our delightful treats.
            

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;

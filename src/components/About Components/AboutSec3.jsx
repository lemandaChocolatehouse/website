import React from "react";
import { useState } from "react";
import AboutImage from "/assets/img/lteam.png";

const AboutSec3 = () => {
  const [showContent, setShowContent] = useState(false);

  const handleScrollClick = () => {
    setShowContent(!showContent); // Toggle the visibility of additional content
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="about-section1 w-full px-16 bg-[#F5F5F5] pb-10 mt-10 md:mt-0">
        <div className="about-section1-btm w-full h-[60vh] flex mt-24 md:mt-0 md:pt-20">
          <div className="about-section1-btm-left w-1/2 h-[450px] rounded-lg overflow-hidden shadow-lg shadow-[#9c9c9c]">
            <img
              src={AboutImage}
              alt="About Us"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full text-center md:text-start md:w-1/2 md:px-20 py-10 md:py-2 flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl text-[#592D1E]  ">
              WHY CHOOSE US?
            </h1>

            {/* <h1 className="text-2xl md:text-3xl text-[#592D1E] mt-2">M/s Chocolate House</h1> */}
            <h1 className="text-black font-semibold  roboto-r ">
              {" "}
              <span className="font-bold text-[#79869F] text-base">
                {" "}
                Handcrafted Elegance:
              </span>{" "}
              Each batch is made with care and attention to detail, delivering
              freshness and flavor in every bite.
            </h1>
            <h1 className=" text-black font-semibold roboto-r ">
              <span className="font-bold text-[#79869F] text-base">
                Quality Ingredients:
              </span>{" "}
              We believe in using the finest ingredients, ensuring every product
              stands out in taste and quality.
            </h1>
            <h1 className=" text-black font-semibold roboto-r ">
              <span className="font-bold text-[#79869F] text-base">
                Customer-Centric:{" "}
              </span>{" "}
              Our business thrives on customer satisfaction, always going the
              extra mile to exceed expectations.
            </h1>
            <h2 className="text-3xl mt-6  text-[#592D1E] ">ACHIEVEMENTS</h2>
            <li className="roboto-r list-none md:list-disc text-center md:text-start">
              Participated in the National Education Programme 2023 at Pragati
              Maidan.
            </li>
            <li className="roboto-r list-none md:list-disc text-center md:text-start">
              Registered under MSME and gained valuable entrepreneurship skills
              through NIESBUD’s cookery and bakery program.
            </li>
          </div>
        </div>
      </div>
      <div className="about-sec3 w-full pt-12 pb-10 bg-[#f5f5f5] px-5">
        <div className="about-section2-top w-full py-10 px-2 text-center">
          <h2 className="text-3xl  text-[#592D1E] ">MY STORY</h2>
          <h1 className=" text-4xl mb-3 mt-3 ">AN INSPIRING JOURNEY</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-16 w-full">
          <div className="w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
            <img
              src="/assets/img/owner.png"
              alt="Team Member 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-[90%] md:w-[80%] roboto-r text-justify">
            I, Anuradha Chauhan, am a TGT Science teacher turned chocolatier and
            Baker. This sentence in itself is an explanation of a lot of my
            struggles. Thanks to COVID-19 I lost a well-paying job at Baba
            Kadera Singh Boarding School in Akha Sonkh, Goverdhan, Mathura in
            2020 which made me feel at my lowest during that period, affirming
            one specific thought "I HAVE NOTHING TO LOSE" but I still had
            responsibilities to look after
            {isExpanded && (
              <>
                Therefore, I made my love for cooking a little handy and started
                my small business of chocolates and cookies. When I started I
                didn't have a big capital or experience, but, the idea was
                enough for me to dream my biggest dream of entering the
                chocolate and baking industry, and without giving a thought to a
                small capital I started my business at a local level. <br />
                When I started marketing at a regional level people started
                acquiring a taste of what I had to offer which was a pleasure to
                think of and a motivation to live upon. However, my lack of
                knowledge of the business made me go through some setbacks which
                caused some losses as well and I started picking it up as a
                lesson, but, a smart person should not learn their lessons
                through losses every time they run a progressive business.
                Hence, I joined NIESBUD. <br />
                <br />
                I joined NIESBUD cookery and bakery classes dt. MAY' 2023 -
                JULY' 2023, these classes did not only offer cooking and baking,
                but also, advised us on how to run a business by managing the
                market, the customer, packaging, finance, etc. Through NIESBUD I
                got registered for MSME, as well as, it gave me an opportunity
                to present my business at National Education Programme, 2023
                organised at PRAGATI MAIDAN which proved to be a learning
                experience for me and a betterment for my business in the long
                run. Not to forget, my happiness of attending the Prime
                Minister's speech. And here, ends my journey with NIESBUD.{" "}
                <br />
                <br />I acknowledge this with gratitude towards Director Poonam
                Sinha and all the NIESBUD staff members who helped me grow and
                understand entrepreneurship in the best way possible.
              </>
            )}
            <button
              onClick={toggleReadMore}
              className="text-[#592d1e] hover:underline"
            >
              {isExpanded ? "....Read less" : "....Read more"}
            </button>
            <br />
            
           
          </div>
          {/* <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
            <img
              src="/assets/img/t4.png"
              alt="Team Member 2"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
            <img
              src="/assets/img/t3.png"
              alt="Team Member 3"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="about-section3-card w-60 h-60 rounded-3xl bg-[#dadada] shadow-md shadow-[#7a7a7a] flex items-center justify-center">
            <img
              src="/assets/img/t2.png"
              alt="Team Member 4"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSec3;

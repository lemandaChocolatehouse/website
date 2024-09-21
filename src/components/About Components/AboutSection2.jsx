import React from "react";

const AboutSection2 = () => {
  return (
    <div className="about-section2 w-full h-screen bg-[#f5f5f5] relative pb-10 ">
      <div className="about-section2-top w-full py-10 text-center">
        <h2 className="text-3xl  text-[#592D1E]">
          OUR VISION
        </h2>
        <h1 className=" text-4xl mb-3 mt-3">
          WHAT'S A OUR VISION FOR FOOD?
        </h1>
      </div>
      <div className="about-section2-btm-left w-full md:w-[52%] text-justify h-full md:h-[45%] ">
        <p className="p-16 text-sm md:text-xl text-[#79869F] roboto-r  ">
          From birthdays to Tuesdays, find the perfect treat for every occasion
          in our curated collections. <br /> Brownie Bliss is a celebration of
          life's sweetest moments. <br />
          Join Our Sweet Community 
          Connect with fellow brownie lovers in our growing community.
          <br /> Share
          stories,  recipes, and the joy that comes with each decadent
          bite.
        </p>
      </div>
      <div className="about-section2-btm-right w-[44%] h-[60%] rounded-xl shadow-lg bg-[#dadada] shadow-[#9c9c9c] absolute bottom-4 right-20">
  <img src="/assets/img/abt3.png" alt="About Us Image" className=" mt-[-190px] object-cover rounded-xl" />
</div>

    </div>
  );
};

export default AboutSection2;

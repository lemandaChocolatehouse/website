import React from "react";

const AboutSection2 = () => {
  return (
    <div className="about-section2 w-full h-screen bg-[#f5f5f5] relative pb-10 ">
      <div className="about-section2-top w-full py-10 text-center">
        <h2 className="text-3xl  text-[#592D1E]">OUR VISION</h2>
        <h1 className=" text-4xl mb-3 mt-3">WHAT'S OUR VISION FOR FOOD?</h1>
      </div>
      <div className="about-section2-btm-left w-full md:w-[52%] text-justify h-full md:h-[45%] ">
        <p className="p-16 text-sm md:text-xl text-[#79869F] roboto-r  ">
        To become a leading name in the chocolate and baking industry, known for creating exceptional, handcrafted treats that bring happiness and joy to every occasion. <br />
          To inspire joy and connection through delicious, handcrafted treats
          that not only satisfy taste buds but also nourish the soul, fostering
          a community that celebrates creativity, sustainability, and a shared
          love for quality food. <br /> This captures a blend of your passion for
          chocolate, baking, and entrepreneurship, along with a commitment to
          quality and community-building.
        </p>
      </div>
      <div className="about-section2-btm-right w-[44%] h-[60%] rounded-xl shadow-lg bg-[#dadada] shadow-[#9c9c9c] absolute bottom-4 right-20">
        <img
          src="/assets/img/abt3.webp"
          alt="About Us Image"
          className=" mt-[-190px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutSection2;

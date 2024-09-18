import React from "react";
import Landing from "./HomeComponents/Landing";
import Section2 from "./HomeComponents/Section2";
import Section3 from "./HomeComponents/Section3";
import Section4 from "./HomeComponents/Section4";
import Section5 from "./HomeComponents/Section5";
import Section6 from "./HomeComponents/Section6";
import Footer from "./Footer";
import Section3IN from "./HomeComponents/Section3IN";


const Home = () => {
  
  return (
    <div className='w-full relative  bg-[#f5f5f5] font-["gilroy"]'>
      <Landing/>
      <Section2 />
      <Section3 />
      <Section3IN />
      <Section5 />
      <Section4 />
      <Section6 />

      
      <Footer />
    </div>
  );
};

export default Home;

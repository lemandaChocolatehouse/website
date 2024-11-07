import React, { useEffect, useState } from "react";
import BigCake from "/assets/img/cake.png";
import Choc from "/assets/img/choc.png";
import SmallCookie from "/assets/img/Mask.png";
import Text2 from "/assets/img/text2.png";
import Heading from "/assets/img/Heading.png"; // Import new heading image
import Paragraph from "/assets/img/Paragraph.png"; // Import new paragraph image


const Section2 = () => {
  const [rotate, setRotate] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.floor(window.scrollY);
      // 1459
      if (scroll >= 356 && scroll <= 1459) {
        setRotate(true);
      }
      else if (scroll > 1459) {
        setRotate(false);
      }
      else {
        setRotate(false);
      }

      if (rotate) {
        setRotation((prevRotation) => prevRotation + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotate]);


  return (
    <div className="section2 w-full flex items-center justify-center gap-5 px-7 py-10 pt-28 bg-[#fff] relative">
      <div className="section2-in shadow-xl flex items-center shadow-[#94949493] w-[25%] h-[75vh] bg-[#dadada] rounded-[4.5vw]  flex-col relative">
        <img className="biscuit-1  absolute -top-24 animate-customBounce" src={BigCake} alt="Big Cake" />
        <h1 className="absolute bottom-5 left-7 text-4xl font-semibold flex items-center text-white">03<span className="text-2xl font-normal">/07</span></h1>
      </div>
      <div className="section2-in-2 flex flex-col justify-center w-[40%] h-[90%] rounded items-center pl-14">
        <img className="ml-32" src={Text2} alt="Text" />
        <div className="point flex items-center gap-6 -ml-28 mt-14">
          <img className="w-[5vw] h-[5vw] rounded-full" src={SmallCookie} alt="Small Cookie" style={{ transform: `rotate(${rotation}deg)` }} />
          <img className="w-[5vw] h-[5vw] rounded-full" src={SmallCookie} alt="Small Cookie" style={{ transform: `rotate(${rotation}deg)` }} />
          <img className="w-[5vw] h-[5vw] rounded-full" src={SmallCookie} alt="Small Cookie" style={{ transform: `rotate(${rotation}deg)` }} />
        </div>
      </div>
      <div className="section2-in-3 w-[30%] h-[90%] ml-12 -mt-16 rounded-3xl flex flex-col items-end">
        <img className="scale-[1.1] drop-shadow-xl shadow-[#0000000]" src={Choc} alt="Chocolate" />
        <div className="in-3-text px-16 -mt-2 ml-7">
          <img className="mb-2" src={Heading} alt="Heading" /> {/* Replace heading text with image */}
          <img className="pr-10" src={Paragraph} alt="Paragraph" /> {/* Replace paragraph text with image */}
        </div>
      </div>
    </div>
  );
};

export default Section2;

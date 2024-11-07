import { useEffect, useState } from "react";
import Cake2 from "/assets/img/cake2.png";
import Cookie from "/assets/img/cookie.png";
import HalfCookie from "/assets/img/halfCookie.png";
import Shadow from "/assets/img/shadow.png";

const Section3IN = () => {
  const [rotate, setRotate] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.floor(window.scrollY);
      console.log(scroll);

      if (scroll >= 1200 && scroll <= 2500) {
        setRotate(true);
        if (scroll >= 1771) { // this will change when uper elements get the data from backend
          setIsFlipped(true);
        }
      }
      else if (scroll > 2500) {
        setRotate(false);
      }
      else {
        setRotate(false);
        setIsFlipped(false)
      }

      if (rotate) {
        setRotation((prevRotation) => prevRotation + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotate, isFlipped]);


  return (
    <div className='section3In flex gap-3 w-full h-[90vh] bg-[#fff] p-8 px-20 font-beach'>
      <div className="section3In-left flex flex-col  py-5 w-3/5 h-full ">
        <h1 className='text-8xl font-bold relative leading-tight text-[#592D1E] '>Your Only <img className='absolute -top-16 right-40' src={Cake2} alt="" style={{ transform: `rotate(${rotation}deg)`, scale: '0.6' }} />  <img className='scale-[0.8] absolute -top-16 right-40' src={Shadow} alt="" /> <br /> Dose Of Delight</h1>
        <h2 className='text-[#592D1E] font-bold mt-7'>Featured Item-</h2>
        <div className='w-full flex items-center'>
          <img className='free-cookie-img -ml-6 mr-4' src={Cookie} alt="" style={{ transform: `rotate(${rotation}deg)`, scale: '0.7' }} />
          <div className='-ml-5'>
            <h1 className='font-black text-xl text-[#592D1E]'>CHOCO COOKIE</h1>
            <h2 className='font-bold text-lg text-[#d18b73]'>Gluten Free</h2>
          </div>
        </div>
        <p className='section3In-left-para w-3/6 text-[#a47261] font-semibold'>Indulge in the finest dark chocolate treats, crafted with care and precision to ensure a rich and satisfying experience.</p>
      </div>
      <img className={`${isFlipped ? 'animate-flipHorizontal' : ''} section3In-right w-2/5 scale-[1.1] ${isFlipped ? 'scale-x-1' : 'scale-x-[-1]' }`} src={HalfCookie} alt="" />
    </div>
  )
}

export default Section3IN
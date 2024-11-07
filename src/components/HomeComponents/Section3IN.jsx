import { useEffect, useState } from "react";
import Cake2 from "/assets/img/cake2.png";
import Cookie from "/assets/img/cookie.png";
import HalfCookie from "/assets/img/halfCookie.png";
import HalfCookie2 from "/assets/img/halfCookie2.png";
import HalfCookieTag from "/assets/img/halfCookieTag.png";
import Shadow from "/assets/img/shadow.png";
import Cookies from '/assets/img/cookies.png'

const Section3IN = () => {
  const [rotate, setRotate] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.floor(window.scrollY);
      
      if (scroll >= 1200 && scroll <= 3000) {
        setRotate(true);
        if (scroll >= 2170) {
          setIsFlipped(true);
        }
      }
      else if (scroll > 3000) {
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
        <h2 className='text-[#592D1E] font-bold mt-7 font-jakarta'>Featured Item-</h2>
        <div className='w-full flex items-center my-2'>
          <img className='free-cookie-img -ml-6 mr-4 w-60' src={Cookies} alt=""  />
          <div className='-ml-5 font-beach'>
            <h1 className='font-black text-xl text-[#592D1E]'>CHOCO COOKIE</h1>
            <h2 className=' text-lg text-[#d18b73]'>Gluten Free</h2>
          </div>
        </div>
        <p className='section3In-left-para w-3/6 text-[#a47261] font-semibold font-jakarta'>Indulge in the finest dark chocolate treats, crafted with care and precision to ensure a rich and satisfying experience.</p>
      </div>
      {/* <img className={`${isFlipped ? 'animate-flipHorizontal' : ''} section3In-right w-2/5 scale-[1.1] ${isFlipped ? 'scale-x-1' : 'scale-x-[-1]' }`} src={HalfCookie} alt="" /> */}
      <div className="relative section3In-right h-[80vh] mx-auto md:w-2/5 md:h-[85vh] flex justify-center items-center sm:w-[70vw] sm:h-[100vh] ">
        <div className="w-[80%] h-[85%] relative flex justify-center">
          <img className={`${isFlipped ? 'animate-flipHorizontal' : ''} w-auto object-fit relative z-30 ${isFlipped ? 'scale-x-1' : 'scale-x-[-1]' }`}  src={HalfCookie2} alt="" />
          <div className="w-full h-[80%] bg-[#5B1C07] absolute bottom-0 rounded-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={HalfCookieTag} alt="Half-Cookie Tag" className="w-32 md:w-20 lg:w-32" />
        </div>
      </div>
    </div>
  )
}

export default Section3IN
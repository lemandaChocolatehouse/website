
import Cake2 from "/assets/img/cake2.png";
import Cookie from "/assets/img/cookie.png";
import HalfCookie from "/assets/img/halfCookie.png";
import Shadow from "/assets/img/shadow.png";

const Section3IN = () => {
  return (
    <div className='section3In flex gap-3 w-full h-[90vh] bg-[#fff] p-8 px-20'>
        <div className="section3In-left flex flex-col  py-5 w-3/5 h-full ">
        <h1 className='text-8xl font-bold relative leading-tight text-[#592D1E] '>Your Only <img className='scale-[0.6] absolute -top-16 right-40' src={Cake2} alt="" />  <img className='scale-[0.8] absolute -top-16 right-40' src={Shadow} alt="" /> <br /> Dose Of Delight</h1>
        <h2 className='text-[#592D1E] font-bold mt-7'>Featured Item-</h2>
        <div className='w-full flex items-center'>
            <img className='free-cookie-img scale-[0.7] -ml-16' src={Cookie} alt="" />
            <div className='-ml-5'>
                <h1 className='font-black text-xl text-[#592D1E]'>CHOCO COOKIE</h1>
                <h2 className='font-bold text-lg text-[#d18b73]'>Gluten Free</h2>
            </div>
        </div>
        <p className='section3In-left-para w-3/6 text-[#a47261] font-semibold'>Indulge in the finest dark chocolate treats, crafted with care and precision to ensure a rich and satisfying experience.</p>
        </div>
        <img className="section3In-right w-2/5 scale-[1.1] " src={HalfCookie} alt="" />
    </div>
  )
}

export default Section3IN
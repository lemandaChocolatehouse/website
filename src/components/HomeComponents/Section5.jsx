
import BigEgg from "/assets/img/eggBig.png";
import ThreeEggs from "/assets/img/threeEggs.png";

const Section5 = () => {
  return (
    <div className='section5 w-full pt-10 px-5 bg-[#f5f5f5]'>
        <div className='egg-parent flex'>
        <div className='bigEgg w-[40%]'>
        <img src={BigEgg} alt="" className="animate-customBounce" />
        </div>
        <div className='threeEggs w-[60%] flex flex-col items-center gap-7 pl-8 py-6'>
            <h1 className='section5-head text-6xl font-semibold text-[#592D1E] font-bebas'>CRAFTED WITH PRESCISION</h1>
            <p className='section5-para px-24 font-poppins text-center text-lg'>We take pride in using only the <span className='text-[#592d1e] font-semibold'>finest, locally sourced</span> ingredients to ensure that each loaf, pastry, and treat that leaves our ovens is a masterpiece.</p>
            <div className='w-[50%]'>
            <img src={ThreeEggs} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section5
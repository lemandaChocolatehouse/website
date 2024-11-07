
import Background from "/assets/img/cookieFull.png";
import Cake3 from "/assets/img/cake3.png";

const Section4 = () => {
  return (
    <div className="section4 w-full px-7 py-10 pt-20 bg-[#fff] flex flex-col items-center gap-5 font-beach">
      <div className="section4-child1 w-[85%] flex justify-between">
      <div className="section4-para w-1/3">
        <p className="text-[#a47261] text-lg font-semibold">Indulge in our bakery's offerings, where every item is a testament to wholesome ingredients and genuine baking practices.
        </p>
        <h1 className="mt-4 font-black text-xl text-[#592D1E]">Pure. <br />Wholesome. <br />Reliable.</h1>
       </div>
        <h1 className="section4-heading text-6xl font-black text-[#592D1E] text-right leading-tight " >
          WHOLESOME <br /> GOODNESS,
        HONEST <br /> TASTE
        </h1>
       
      </div>
      <div className="section4-img w-[90%] pt-8 relative">
        <img className="absolute -top-32 -left-28 scale-[0.6] animate-customBounce2" src={Cake3} alt="" />
      <img src={Background} alt="" />
      </div>
    </div>
  );
};
export default Section4;

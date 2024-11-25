import { Link } from "react-router-dom"; // Import Link for navigation
import Text from "/assets/img/Text Container.png";
import Choclate from "/assets/img/right_choclate.webp";
import Choclate1 from "/assets/img/choclate1.png";
import Choclate2 from "/assets/img/choclate2.png";
import Choclate3 from "/assets/img/choclate3.png";
import Choclate4 from "/assets/img/choclate4.png";
import Choclate5 from "/assets/img/choclate5.png";
import groupLine from "/assets/img/groupLine.png";
import Roundedbg from "/assets/img/Roundedbg.png";
import textImg from "/assets/img/text.png";
import bsqImg from "/assets/img/bsq.webp";
import rbgImg from "/assets/img/rbg.png";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

const RollingNumber = ({ targetNumber, duration, stepTime }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const totalSteps = duration / stepTime;
    const stepValue = targetNumber / totalSteps;

    const interval = setInterval(() => {
      setCurrentNumber(prevNumber => {
        if (prevNumber >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return Math.min(prevNumber + stepValue, targetNumber);
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetNumber, duration, stepTime]);

  return <h1 className="text-5xl font-bold font-montserrat">{Math.floor(currentNumber)} +</h1>
};

const Landing = () => {
  return (
    <div className="landing w-full h-fit bg-white px-4 py-3 md:py-24">
      <div className="landing-image overflow-hidden w-full h-[630px] md:h-screen bg-[#592D1E] rounded-[36px] px-8 pt-10 py-6 flex justify-between relative">
        <div className="relative">
          {/* <img
            className="text-content w-[42vw] relative z-20"
            src={Text}
            alt=""
          /> */}
          <div className="text-white font-beach text-[50px] md:text-[55px] lg:text-[80px] md:leading-[70px] relative z-40 xl:mt-20">MELT YOUR HEARTS</div>
          <div className="w-[45vw] flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-4 w-full md:mt-8 md:mb-0">
              <div className="text-white text-[6px] md:text-[12.5px] roboto-r md:w-[40%] ">Crafted with love, passion, and the finest ingredients, our chocolates and baked treats offer an irresistible taste of sweetness and elegance. Each bite tells the story of dedication and artistry.
              </div>
              <div className="w-[30%] md:w-[50%] text-white font-beach text-[50px] md:text-[55px] lg:text-[80px] md:leading-[80px]">WITH</div>
            </div>
          </div>
          <div className="text-white font-jagret text-[50px] md:text-[55px] lg:text-[80px] md:leading-[180px] relative z-40">EVERY BITE</div>
          <img
            className="images absolute top-3 -right-48 scale-[0.8]"
            src={Choclate1}
            alt=""
          />
          <img
            className="images absolute -top-4 -left-0 scale-[0.8]"
            src={Choclate2}
            alt=""
          />
          <img
            className="images absolute -bottom-0 -right-28 scale-[0.9]"
            src={Choclate3}
            alt=""
          />
          <img
            className="images absolute bottom-14 -left-14 scale-[0.7] z-10"
            src={Choclate4}
            alt=""
          />
          <div className="images shop-now flex items-center mt-0 relative md:mt-5 md:gap-5">
            <div className="circles flex absolute md:-top-[70px] md:mb-8">
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] border md:w-[40px] md:h-[40px] border-black xl:w-[60px] xl:h-[60px]"
                style={{
                  backgroundImage: `url('/assets/img/c3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] relative -left-8 border md:w-[40px] md:h-[40px] md:-left-[20px] border-black xl:w-[60px] xl:h-[60px]"
                style={{
                  backgroundImage: `url('/assets/img/c2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] relative -left-16 md:w-[40px] md:h-[40px] border md:-left-10 border-black xl:w-[60px] xl:h-[60px]"
                style={{
                  backgroundImage: `url('/assets/img/c1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="hidden sm:flex absolute gap-16 items-center z-40 md:mt-8 xl:mt-20">
              <div className="text-white">
                <RollingNumber targetNumber={720} duration={1000} stepTime={10} />
                <p className="text-[grey] font-sans">Happy Customers</p>
              </div>
              <div className="hrline w-[1px] h-16 bg-white"></div>
              <div className="text-white">
                <RollingNumber targetNumber={20} duration={1000} stepTime={50} />
                <p className="text-[grey] font-sans">Recipies</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 absolute left-0 md:bottom-[10px] xl:bottom-0 2xl:bottom-10">
            {/* Link to Product Page */}
            <Link to="/shop">
              <button className="bg-[#833829] text-white font-semibold font-[inter] py-5 px-10 rounded-full text-lg relative z-30">
                Grab a Bite
              </button>
            </Link>
            <button className="flex items-center gap-3 text-white font-bold py-4 px-7 rounded-full text-lg">
              <IoIosArrowForward />
            </button>
          </div>
          <div className="shop-now w-full flex flex-col justify-center mt-32 sm:mt-0 md:hidden">
            <div className="w-full sm:flex relative ml-10 hidden">
              <div
                className="circle w-[70px] h-[70px] rounded-full bg-[#833829] border border-black z-50"
                style={{
                  backgroundImage: `url('/assets/img/c3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[70px] h-[70px] rounded-full bg-[#833829] relative right-[40px]  border border-black z-50"
                style={{
                  backgroundImage: `url('/assets/img/c2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[70px] h-[70px] rounded-full bg-[#833829] relative -left-[75px] border border-black z-50"
                style={{
                  backgroundImage: `url('/assets/img/c1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="hidden relative sm:flex gap-10 my-2 z-40">
              <div className="text-white flex flex-col items-center">
                <RollingNumber targetNumber={720} duration={1000} stepTime={10} />
                <p className="text-[grey] font-sans">Happy Customers</p>
              </div>
              <div className="hrline w-[1px] h-16 bg-white"></div>
              <div className="text-white flex flex-col items-center">
                <RollingNumber targetNumber={20} duration={1000} stepTime={50} />
                <p className="text-[grey] font-sans">Recipes</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[100px] md:top-[-150px] md:right-[-130px] scale-[0.8]"
          src={Choclate}
          alt=""
        />
        <img
          className="absolute top-[380px] scale-[0.2] left-80 md:top-0 md:left-[90%] md:scale-[0.8] z-10"
          src={Choclate5}
          alt=""
        />
        <img
          className="absolute -top-32 -right-28 scale-[0.7] z-10 animate-rotate"
          src={groupLine}
          alt=""
        />

        {/* Adjusted Roundedbg and content on top */}
        <div className=" absolute bottom-0 right-[-1px] scale-[0.7] z-40 sm:-bottom-[10px] md:hidden lg:bottom-10 lg:block">
          <img
            src={Roundedbg}
            alt="Rounded background"
            className="relative z-0 h-32 md:h-48"
          />

          {/* Divs placed in horizontal manner on top of Roundedbg */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center ">
            {/* First div with text.png */}
            <div className="w-1/4 h-full md:flex justify-center items-center hidden">
              <img
                className="absolute right-[470px]"
                src={textImg}
                alt="Text"
              />
            </div>

            {/* Add vertical gray line between first and second div */}
            <div className="w-[2px] h-[70%] bg-gray-400 mx-4 hidden md:block"></div>

            <Link
              to="/shop"
              className="w-1/3 md:w-1/4 h-full flex justify-center items-center relative group hover:cursor-pointer"
            >
              <div className="absolute bg-[#4c2417] group-hover:w-[160px] rounded-tl-3xl rounded-tr-3xl group-hover:h-[237px] top-[10px] md:top-[30px] group-hover:-top-[40px] mx-20"></div>

              <img
                className="absolute top-[10px]  md:top-[30px] group-hover:top-[10px] left-0 right-0 m-auto w-[80px] h-[80px] object-cover"
                src="/assets/img/s1.jpg"
                alt="s1"
              />
              <div className="absolute top-[87px] md:top-[110px] text-black text-center">
                <h2 className="font-bold text-lg font-montserrat group-hover:text-2xl group-hover:text-white">
                  Chocolates
                </h2>
                <h1 className="hidden md:block text-gray-600 font-sans group-hover:text-lg group-hover:font-bold">
                  Buy now &gt;
                </h1>
              </div>
            </Link>
            <Link
              to="/shop"
              className="w-1/3 md:w-1/4 h-full flex justify-center items-center relative group hover:cursor-pointer"
            >
              <div className="absolute bg-[#4c2417] group-hover:w-[160px] rounded-tl-3xl rounded-tr-3xl group-hover:h-[237px] top-[10px] md:top-[30px] group-hover:-top-[40px] mx-20"></div>

              <img
                className="absolute top-[10px] md:top-[30px] group-hover:top-[10px] left-0 right-0 m-auto w-[80px] h-[80px] object-cover"
                src="/assets/img/tuti.jpg"
                alt="s1"
              />
              <div className="absolute top-[87px] md:top-[110px] text-black text-center">
                <h2 className="font-bold text-lg group-hover:text-2xl font-montserrat group-hover:text-white">
                  Cakes
                </h2>
                <h1 className="hidden md:block text-gray-600 font-sans group-hover:text-lg group-hover:font-bold">
                  Buy now &gt;
                </h1>
              </div>
            </Link>
            <Link
              to="/shop"
              className="w-1/3 md:w-1/4 h-full flex justify-center items-center relative group hover:cursor-pointer"
            >
              <div className="absolute bg-[#4c2417] group-hover:w-[160px] rounded-tl-3xl rounded-tr-3xl group-hover:h-[237px] top-[10px] md:top-[30px] group-hover:-top-[40px] mx-20"></div>

              <img
                className="absolute top-[10px] md:top-[30px] group-hover:top-[10px] left-0 right-0 m-auto w-[80px] h-[80px] object-cover"
                src="/assets/img/s3.jpg"
                alt="s1"
              />
              <div className="absolute top-[87px] md:top-[110px] text-black text-center">
                <h2 className="font-bold text-lg group-hover:text-2xl font-montserrat group-hover:text-white">
                  Cookies
                </h2>
                <h1 className="hidden md:block text-gray-600 font-sans group-hover:text-lg group-hover:font-bold">
                  Buy now &gt;
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

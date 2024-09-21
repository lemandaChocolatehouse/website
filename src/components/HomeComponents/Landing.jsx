import { Link } from "react-router-dom"; // Import Link for navigation
import Text from "/assets/img/Text Container.png";
import Choclate from "/assets/img/right_choclate.png";
import Choclate1 from "/assets/img/choclate1.png";
import Choclate2 from "/assets/img/choclate2.png";
import Choclate3 from "/assets/img/choclate3.png";
import Choclate4 from "/assets/img/choclate4.png";
import Choclate5 from "/assets/img/choclate5.png";
import groupLine from "/assets/img/groupLine.png";
import Roundedbg from "/assets/img/Roundedbg.png";
import textImg from "/assets/img/text.png";
import bsqImg from "/assets/img/bsq.png";
import rbgImg from "/assets/img/rbg.png";
import { IoIosArrowForward } from "react-icons/io";

const Landing = () => {
  return (
    <div className="landing w-full h-fit bg-white px-4 py-3 mt-14">
      <div className="landing-image overflow-hidden w-full h-screen bg-[#592D1E] rounded-2xl px-8 py-6 flex justify-between relative">
        <div className="landing-text relative">
          <img
            className="text-content w-[42vw] relative z-20"
            src={Text}
            alt=""
          />
          <img
            className="images absolute top-12 -right-12 scale-[0.6]"
            src={Choclate1}
            alt=""
          />
          <img
            className="images absolute -top-4 -left-8 scale-[0.6]"
            src={Choclate2}
            alt=""
          />
          <img
            className="images absolute -bottom-10 -right-28 scale-[0.5]"
            src={Choclate3}
            alt=""
          />
          <img
            className="images absolute bottom-24 -left-14 scale-[0.4] z-10"
            src={Choclate4}
            alt=""
          />
          <div className="images shop-now flex items-center mt-7">
            <div className="circles flex relative">
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] relative -left-8 border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[4.4vw] h-[4.4vw] rounded-full bg-[#833829] relative -left-16 border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="flex gap-16 items-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold">520 +</h1>
                <p className="text-[grey] font-sans">Happy Customers</p>
              </div>
              <div className="hrline w-[1px] h-16 bg-white"></div>
              <div className="text-white">
                <h1 className="text-5xl font-bold">780 +</h1>
                <p className="text-[grey] font-sans">Recipes</p>
              </div>
            </div>
          </div>
          <div className="images buttons mt-12 flex gap-5">
            {/* Link to Product Page */}
            <Link to="/shop">
              <button className="bg-[#833829] text-white font-semibold font-sans py-5 px-10 rounded-full text-lg">
                Grab a Bite
              </button>
            </Link>
            <button className="flex items-center gap-3 text-white font-bold py-4 px-7 rounded-full text-lg">
              <IoIosArrowForward />
            </button>
          </div>
          <div className="shop-now w-full flex flex-col justify-center items-center mt-32">
            <div className="w-full flex justify-center relative ml-10">
              <div
                className="circle w-[14vw] h-[14vw] rounded-full bg-[#833829] border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[14vw] h-[14vw] rounded-full bg-[#833829] relative -right-[36px]  border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="circle w-[14vw] h-[14vw] rounded-full bg-[#833829] relative -left-[69px] border border-black"
                style={{
                  backgroundImage: `url('/assets/img/c1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="flex gap-10 items-center my-2">
              <div className="text-white flex flex-col items-center">
                <h1 className="text-xl font-bold">520 +</h1>
                <p className="text-[grey] font-sans">Happy Customers</p>
              </div>
              <div className="hrline w-[1px] h-16 bg-white"></div>
              <div className="text-white flex flex-col items-center">
                <h1 className="text-xl font-bold">780 +</h1>
                <p className="text-[grey] font-sans">Recipes</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[30px]   md:top-[-150px] md:right-[-130px] scale-[0.8]"
          src={Choclate}
          alt=""
        />
        <img
          className="absolute top-[380px] left-40 md:top-0 md:right-0 scale-[0.8] z-10"
          src={Choclate5}
          alt=""
        />
        <img
          className="absolute -top-64 -right-28 scale-[0.6] z-10"
          src={groupLine}
          alt=""
        />

        {/* Adjusted Roundedbg and content on top */}
        <div className="rounded-section absolute bottom-[0px] right-[-1px] scale-[0.7] z-0">
          <img
            src={Roundedbg}
            alt="Rounded background"
            className="relative z-0"
          />

          {/* Divs placed in horizontal manner on top of Roundedbg */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
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
                <h2 className="font-bold text-lg group-hover:text-2xl font-sans group-hover:text-white">
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
                <h2 className="font-bold text-lg group-hover:text-2xl font-sans group-hover:text-white">
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
                <h2 className="font-bold text-lg group-hover:text-2xl font-sans group-hover:text-white">
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

import React, { forwardRef } from "react";
import { PiFacebookLogoBold, PiTwitterLogoBold } from "react-icons/pi";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="footer w-70% ml-3 mr-3 px-7 py-8 bg-[#592D1E] text-white rounded-[30px] font-sans mb-[40px] bebas"
      >
        <h1 className="text-7xl ">NEED HELP?</h1>
        <div className="footer-child1 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="footer-child1-part1">
            <div className="footer-links flex items-center gap-4 mt-4">
              <a
                className="w-full md:w-fit flex items-center gap-2 px-4 py-2 rounded-full border border-[grey]"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiFacebookLogoBold />
                <span className="text-lg">FACEBOOK</span>
              </a>
              <a
                className="w-full md:w-fit flex items-center gap-2 px-4 py-2 rounded-full border border-[grey]"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTwitterLogoBold />
                <span className="text-lg">TWITTER</span>
              </a>
              <a
                className="w-full md:w-fit flex items-center gap-2 px-4 py-2 rounded-full border border-[grey]"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoInstagram />
                <span className="text-lg">INSTAGRAM</span>
              </a>
            </div>
          </div>
          <div className="flex  ">
            {/* <p className="text-xl">Queries @</p> */}
            <h1 className="text-3xl mt-5">
            lemanda1978@gmail.com

            </h1>
          </div>
        </div>
        <div className="footer-child2 w-full flex items-center justify-between mt-11">
          <div className="footer-child2-part1">
            <h1 className="text-2xl ">FEATURE</h1>
            <div className="footer-child1-part1-links flex items-start gap-5 text-[grey] mt-2  text-lg">
              <a href="">TRANSACTION</a>
              <a href="">TRACKING</a>
              <a href="">FEED</a>
              <a href="">PAYMENT</a>
            </div>
          </div>
          <div className="foot flex gap-32">
            <div className="footer-child2-part2">
              <h1 className="text-2xl ">ABOUT US</h1>
              <div className="flex items-start gap-5 text-[grey] mt-2  text-lg">
                <a href="">PROFILE</a>
                <a href="">ADDRESS</a>
              </div>
            </div>
            <div className="footer-child2-part3">
              <h1 className="text-2xl ">SERVICE</h1>
              <div className="flex items-start gap-5 text-[grey] mt-2  text-lg">
                <a href="/about#terms">TERMS OF USE</a>
                <a href="/about#terms">PRIVACY POLICY</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer New Div */}
      <div
        className=" w-70% ml-3 mr-3 px-7 py-4 bg-[#592D1E] text-white rounded-[15px] mt-8 mb-8 bebas"
        style={{ height: "25%" }}
      >
        <p className="text-center md:text-xl">
        ©️2024 Le manda Chocolate House, made with 💖 by Campaigning Source, all rights reserved
        </p>
      </div>

      {/* New White Div */}
      <div className=" py-1 bg-[9F8D8D] ">
        
</div>

    </>
  );
});

export default Footer;


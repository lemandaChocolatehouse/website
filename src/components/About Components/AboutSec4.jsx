import React from "react";

const AboutSec4 = () => {
  return (
    <div className="about-sec4 w-full py-8 bg-[#f5f5f5] px-20">
      <div className="about-sec4-top w-full flex items-end justify-between">
        <div>
          <h3 className="text-2xl  text-[#592D1E]">FAQ</h3>
          <h1 className="text-3xl  mt-5">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <p className="text-lg text-[grey] roboto-r">
          Provide convenience services with attractive  and fun options.
        </p>
      </div>
      <div className="about-sec4-btm w-full h-fit flex gap-10 mt-8">
        <div className="about-sec4-btm-left flex flex-col items-center gap-5 justify-around w-1/2 h-full">
          {[
            {
              id: "1",
              name: "How can I track my order?",
              para: "Simply enter your order number in the tracking section and  status.",
            },
            {
              id: "2",
              name: "What is your return policy?",
              para: "We offer a 30-day return policy on most items.",
            },
            {
              id: "3",
              name: "Do you offer international shipping?",
              para: "Yes, we offer international shipping. Shipping fees and delivery times vary.",
            },
            {
              id: "4",
              name: "How can I contact customer support?",
              para: "You can reach our customer support team via email or phone.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-7 w-full py-4 px-8 bg-none hover:bg-white hover:shadow-md hover:shadow-[#969696] rounded-3xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#592D1E] text-white rounded-full font-semibold">
                {item.id}
              </div>
              <div className="w-[80%]">
                <h1 className=" text-lg mb-1">{item.name}</h1>
                <p className="text-[grey] roboto-r">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-sec4-btm-right w-1/2 rounded-lg shadow-md shadow-[#969696] flex items-center justify-center">
          <img
            src="/assets/img/faq.jpg"
            alt="FAQ"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSec4;


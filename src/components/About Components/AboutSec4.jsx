import React from "react";

const AboutSec4 = () => {
  const terms = [
    {
      id: "1",
      desc: "Shipping policy ( no of days it will take to deliver for eg. 5-7 working days it will take to deliver)",
    },
    {
      id: "2",
      desc: "Return policy ( after delivery you can return within 2 days)",
    },
    {
      id: "3",
      desc: "Refund policy ( it will take 5-7 working days to refund in your bank account) ",
    },
  ];

  return (
    <div className="about-sec4 w-full py-8 bg-[#f5f5f5] px-20">
      <div className="about-sec4-top w-full flex items-end justify-between">
        <div>
          <h3 className="text-2xl  text-[#592D1E]">FAQ</h3>
          <h1 className="text-3xl  mt-5">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <p className="text-lg text-[grey] roboto-r">
          Provide convenience services with attractive and fun options.
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
              <div className="w-[90%]">
                <h1 className=" text-lg mb-1">{item.name}</h1>
                <p className="text-[grey] roboto-r">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-sec4-btm-right w-1/2 rounded-lg shadow-md shadow-[#969696] flex items-center justify-center">
          <img
            src="/assets/img/faqmain.png"
            alt="FAQ"
            className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-lg"
          />
        </div>
      </div>
      <div className="bebas mt-14 w-full" id="terms">
        <h1 className="text-3xl text-center md:text-start md:text-6xl md:ml-8">Terms & Conditions</h1>
        {terms.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 md:gap-7 w-full py-4 px-2 md:px-8 bg-none hover:bg-white hover:shadow-md hover:shadow-[#969696] rounded-3xl transition-all duration-300 cursor-pointer"
          >
            <div className="w-9 h-8 md:w-12 md:h-12 flex items-center justify-center bg-[#592D1E] text-white rounded-full font-semibold">
              {item.id}
            </div>
            <div className="w-full">
              <p className="text-[#4b4949] text-[12px] md:text-base roboto-r">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSec4;

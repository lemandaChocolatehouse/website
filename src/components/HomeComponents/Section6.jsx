

const Section6 = () => {
  return (
    <div className="w-full">
      <div className="reviews-section w-full p-20 flex items-center justify-center gap-14 bebas">
        <div className="review-left w-[50%] h-[80vh] px-8 pt-10 py-6 flex flex-col gap-6">
          <h1 className="text-8xl tracking-wider text-[#592d1e] text-center">TESTIMONY</h1>
          <p className="text-[grey] text-center">Explore what people are saying about us</p>
          <div className="customer-review h-fit overflow-auto px-4">
          {[
            {
                name: "Tara",
                rating: "5",
                desc: "“Le manda is my go to bakery! The sourdough is an absolute delight, and every pastry is a masterpiece.”",
            },
            {
                name: "Vishwajit",
                rating: "4",
                desc: "“Le manda is my go to bakery! The sourdough is an absolute delight, and every pastry is a masterpiece.”",
            },
            {
                name: "Sumit",
                rating: "3",
                desc: "“The warmth and freshness at Le manda keep me coming back. It's the perfect blend of tradition and innovation.”",
            },

          ].map((item, index)=>(
            <div key={index} className="review-left-customer shrink-0 mt-5 mb-10 ">
            <div className="w-fit flex items-center px-3 py-2 gap-4 bg-white rounded-full shadow-xl shadow-[#dadada]">
              <div className="w-12 h-12 rounded-full bg-[#c7c9d9]"></div>
               <div className="pr-3">
                  <h1 className="font-bold">{item.name}</h1>
                  <h2 className="font-semibold text-yellow-400">{item.rating}/5 STAR</h2>
               </div>
            </div>
               <p className="w-full bg-white px-5 py-2 rounded-full mt-2 text-sm text-[grey] shadow-xl roboto-italic shadow-[#dadada]">{item.desc}</p>
        </div>
          ))}
          </div>
        </div>
        <div className="review-right w-[50%] h-[80vh] rounded-full">
          <img src="/assets/img/testiback.png" alt="review" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Section6;

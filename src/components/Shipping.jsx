import React from 'react';
import Footer from './Footer';

const Shipping = () => (
    <>
  <div className='w-full flex flex-col gap-6 mt-28 mb-10 roboto-r px-6 md:px-20'>
    <h1 className='text-3xl md:text-7xl text-[#592d1e] text-center bebas'>Shipping and Delivery Policy</h1>
    <h1 className='text-xl  underline hidden md:block '>Shipping Policies</h1>

    <p className='w-full text-sm md:text-base'>At Le Manda Chocolate House, we aim to deliver your chocolates and confections with care and precision, ensuring the best quality reaches you in perfect condition. Please read our shipping and delivery guidelines below:</p>
      <div className='flex flex-col gap-3'>
    <p><strong className='text-base md:text-xl'>1. Shipping Locations</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>We currently ship to addresses within India only.</p>

    <p><strong className='text-base md:text-xl'>2. Processing Time</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>All orders are processed within 1-2 business days. Orders placed on weekends or public holidays will be processed on the next business day.</p>

    <p><strong className='text-base md:text-xl'>3. Shipping Rates</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Shipping rates are calculated at checkout based on the weight of the package, destination, and chosen shipping method. We offer free standard shipping on orders above ₹2000 within India.</p>

    <p><strong className='text-base md:text-xl'>4. Delivery Timeframes</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Standard Shipping: Typically arrives within 3-7 business days for domestic orders. <br /> Express Shipping: Delivery within 1-3 business days for domestic orders.</p>

    <p><strong className='text-base md:text-xl'>5. Order Tracking</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Once your order is shipped, you will receive a tracking number via email, allowing you to track your package online.</p>

    <p><strong className='text-base md:text-xl'>6. Warm Weather Shipping</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>To protect our chocolates from heat damage during warm weather, we may include ice packs and insulation for an additional charge. We recommend express shipping during warmer months.</p>

    <p><strong className='text-base md:text-xl'>7. Missed or Delayed Deliveries</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Le Manda Chocolate House is not responsible for delays caused by the carrier, incorrect addresses, or other uncontrollable circumstances.</p>

    <p><strong className='text-base md:text-xl'>8. International Customs and Duties</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>For international orders, customs duties, taxes, and fees are the customer's responsibility.</p>

    <p><strong className='text-base md:text-xl'>9. Damaged or Lost Packages</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>If your package arrives damaged or does not arrive, please contact us at lemanda1978@gmail.com within 48 hours of the expected delivery date.</p>
  </div>
  </div>
  <div>
    <Footer />
  </div>
  </>
);

export default Shipping;

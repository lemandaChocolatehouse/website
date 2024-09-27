import React from 'react';
import Footer from './Footer';

const Terms = () => (
    <>
  <div className='w-full flex flex-col gap-6 mt-28 mb-10 roboto-r md:px-20 px-6'>
    <h1 className='text-3xl md:text-7xl text-[#592d1e] text-center bebas'>Terms & Conditions</h1>
    <h1 className='text-base md:text-xl  underline hidden md:block '>Terms & Conditions</h1>
     <div className='w-full flex flex-col gap-2'>
    <p><strong className='text-base md:text-xl'>1. Acceptance of Terms</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>By accessing or using the Le Manda Chocolate House website, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use the website.</p>

    <p><strong className='text-base md:text-xl'>2. Use of Website</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>You may use the Le Manda Chocolate House website for lawful purposes only. You may not use the website in any way that violates any applicable laws or regulations.</p>

    <p><strong className='text-base md:text-xl'>3. Intellectual Property</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>The content on the Le Manda Chocolate House website, including text, graphics, logos, and images, is the property of Le Manda Chocolate House and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from the website without prior written consent.</p>

    <p><strong className='text-base md:text-xl'>4. Disclaimer of Warranties</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>The Le Manda Chocolate House website is provided on an “as is” and “as available” basis. Le Manda Chocolate House makes no warranties, express or implied, regarding the website and its content, including but not limited to the accuracy, completeness, or reliability of the content.</p>

    <p><strong className='text-base md:text-xl'>5. Limitation of Liability</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Le Manda Chocolate House shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.</p>

    <p><strong className='text-base md:text-xl'>6. Governing Law</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>These terms and conditions shall be governed by and construed in accordance with the laws of The Information Technology Act, 2000 (IT Act).</p>

    <p><strong className='text-base md:text-xl'>7. Changes to Terms</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>Le Manda Chocolate House reserves the right to change these terms and conditions at any time. Your continued use of the website following any changes constitutes your acceptance of the revised terms.</p>

    <p><strong className='text-base md:text-xl'>8. Contact Us</strong></p>
    <p className='w-full md:w-[95%] text-sm md:text-base text-justify'>If you have any questions about these terms and conditions, please contact us at lemanda1978@gmail.com.</p>
    </div>
  </div>
  <div>
  <Footer />
  </div>
 
  </>
);

export default Terms;

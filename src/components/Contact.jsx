import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url(/assets/img/s.jpg)', // Full page background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="relative p-8 rounded-lg shadow-lg"
        style={{
          backgroundColor: 'beige', // Brown background color
         opacity:'95%',
          width: '100%',
          maxWidth: '600px',
          marginTop:'80px',
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black relative">
          <span className="absolute inset-0  opacity-50 -z-10"></span>
          Contact Us
        </h2>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-100">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#833829]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-100">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#833829]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-100">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#833829]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-100">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#833829]"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#833829] text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-[#A84C3F] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

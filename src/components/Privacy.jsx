import React from "react";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 mt-28 mb-10 roboto-r px-6 md:px-20">
        <h1 className="text-3xl md:text-7xl text-[#592d1e] text-center bebas">
          Privacy Policy
        </h1>

        <h1 className="text-base md:text-xl hidden md:block underline">Privacy Policy</h1>

        <p className="text-sm md:text-base">
          <strong>Le Manda Chocolate House</strong> is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our bakeries
          or use our services. By using our services, you agree to the terms of
          this Privacy Policy.
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-base md:text-xl font-semibold mt-2 ">
            Information We Collect
          </h2>
          <p className="text-sm md:text-base">
            We may collect personal information from you in various ways,
            including, but not limited to, when you visit our bakeries, place an
            order, subscribe to our newsletter, or contact us. The personal
            information we may collect includes:
          </p>
          <ul className="list-disc text-sm md:text-base list-inside ml-6">
            <li>
              <strong>Contact Information:</strong> Name, phone number, email
              address, and mailing address.
            </li>
            <li>
              <strong>Order Information:</strong> Details of products you have
              purchased from us.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card information and
              billing address.
            </li>
            <li>
              <strong>Communications:</strong> Records of your interactions with
              us.
            </li>
          </ul>

          <h2 className="text-base md:text-xl font-semibold mt-2 ">
            How We Use Your Information
          </h2>
          <p className="text-sm md:text-base">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc text-sm md:text-base list-inside ml-6">
            <li>To provide and improve our services and products.</li>
            <li>To process your orders and transactions.</li>
            <li>
              To communicate with you regarding your orders, inquiries, or other
              requests.
            </li>
            <li>
              To send you promotional materials and updates about our products
              and services.
            </li>
            <li>To improve our customer service.</li>
          </ul>

          <h2 className="text-base md:text-xl font-semibold mt-2 ">
            Sharing Your Information
          </h2>
          <p className="text-sm md:text-base">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties, except as described in this Privacy
            Policy. We may share your information with third parties who assist
            us in operating our business, conducting our affairs, or servicing
            you, as long as those parties agree to keep this information
            confidential.
          </p>
          <p className="text-sm md:text-base">
            We may also release your information when we believe it is
            appropriate to comply with the law, enforce our site policies, or
            protect ours or others’ rights, property, or safety.
          </p>

          <h2 className="text-base md:text-xl font-semibold mt-2 ">
            Branch Locations and Contact Information
          </h2>
          <p className="text-sm md:text-base">
            <strong>Address:</strong> K-8 Niti Nagar, Sanjay Nagar Ghaziabad,
            Uttar Pradesh, India
          </p>
          <p className="text-sm md:text-base">
            <strong>Contact:</strong> +91 89203 09557
          </p>
          <p className="text-sm md:text-base">
            <strong>Email:</strong>{" "}
            <a href="mailto:lemanda1978@gmail.com" className="text-[#592d1e]">
              lemanda1978@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;

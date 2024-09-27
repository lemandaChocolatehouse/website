import React from "react";
import Footer from "./Footer";

const Cancel = () => {
  return (
    <>
    <div className="w-full flex flex-col gap-6 mt-28 mb-10 roboto-r px-6 md:px-20">
      <h1 className="text-3xl md:text-7xl text-[#592d1e] text-center bebas">
        Cancellation and Refund Policy
      </h1>

      <h1 className="text-xl hidden md:block underline">Cancellation and Refund Policy</h1>
       
       <div>
      <p className="text-sm md:text-base">
        At <strong>Le Manda Chocolate House</strong>, we are committed to
        providing the finest chocolate experience. However, we understand that
        there may be circumstances where you need to cancel or request a refund.
        Please review our policy below:
      </p>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">
        1. Order Cancellations
      </h2>
      <p className="text-sm md:text-base">
        Orders can be cancelled within 24 hours of placing the order, provided
        the product has not yet been shipped. To cancel an order, please contact
        us at{" "}
        <a href="mailto:lemanda1978@gmail.com" className="text-[#592d1e]">
          lemanda1978@gmail.com
        </a>{" "}
        with your order details. Once your cancellation is approved, a full
        refund will be processed back to your original method of payment within
        7-10 business days.
      </p>
      <p className="text-sm md:text-base">Orders cannot be cancelled after they have been shipped.</p>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">
        2. Non-Returnable Items
      </h2>
      <p className="text-sm md:text-base">
        Due to the perishable nature of our products, we do not accept returns
        or exchanges on any of the following:
      </p>
      <ul className="list-disc text-sm md:text-base list-inside ml-6">
        <li>Chocolates and confections</li>
        <li>Gift baskets and custom orders</li>
        <li>Sale items or promotional offers</li>
      </ul>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">
        3. Damaged or Incorrect Products
      </h2>
      <p className="text-sm md:text-base">
        If you receive a product that is damaged or incorrect, please notify us
        within 48 hours of delivery by emailing{" "}
        <a href="mailto:lemanda1978@gmail.com" className="text-[#592d1e]">
          lemanda1978@gmail.com
        </a>
        . We may require photo evidence of the damage or incorrect item. Once
        verified, we will:
      </p>
      <ul className="list-disc text-sm md:text-base list-inside ml-6">
        <li>Offer a replacement, or</li>
        <li>Issue a full refund, including any shipping charges.</li>
      </ul>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">4. Refunds</h2>
      <p className="text-sm md:text-base">Refunds are processed in the following scenarios:</p>
      <ul className="list-disc text-sm md:text-base list-inside ml-6">
        <li>Cancellations made within the allowed period.</li>
        <li>Orders that could not be fulfilled due to stock unavailability.</li>
        <li>
          Products damaged during shipping or incorrect items, verified through
          customer service.
        </li>
      </ul>
      <p className="text-sm md:text-base">
        Refunds will be processed within 7-10 business days after approval,
        depending on your bank or payment provider.
      </p>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">
        5. Late or Missing Refunds
      </h2>
      <p className="text-sm md:text-base">
        If you haven’t received your refund within the stipulated time, please:
      </p>
      <ul className="list-disc text-sm md:text-base list-inside ml-6">
        <li>
          Check with your bank or credit card company, as processing times vary.
        </li>
        <li>
          If you’ve done this and still haven’t received your refund, contact us
          at{" "}
          <a href="mailto:lemanda1978@gmail.com" className="text-[#592d1e]">
            lemanda1978@gmail.com
          </a>
          .
        </li>
      </ul>

      <h2 className="text-base md:text-xl font-semibold mt-6 mb-2">6. Shipping Costs</h2>
      <p className="text-sm md:text-base">
        Shipping costs are non-refundable, except in the case of damaged or
        incorrect products.
      </p>
    </div>
    </div>
    <div>
        <Footer />
    </div>
    </>
  );
};

export default Cancel;

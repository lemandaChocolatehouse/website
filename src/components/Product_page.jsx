import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "/assets/img/cake3.png";
import BannerBackground from "/assets/img/Product.png";
import { RiEqualizerLine } from "react-icons/ri";
import Footer from "./Footer";
import ChoclateCards from "./HomeComponents/ChoclateCards";

const Product_page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown after selecting a category
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    setIsPriceDropdownOpen(false); // Close dropdown after selecting a price
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <div className="productdesc w-full pt-16 mt-10 md:mt-2 bebas tracking-wider">
      <div className="product-nav flex items-center gap-4 sm:gap-6 md:gap-8 w-full pt-4 pb-3 px-4 sm:px-6 md:px-20">
        <Link to="/home" className="flex items-center gap-2 sm:gap-4 ">
          <span className="text-gray-600">HOME</span> <IoIosArrowForward />
        </Link>
        <Link to="#" className="flex items-center gap-2 sm:gap-4 ">
          <span className="text-gray-600">SHOP</span> <IoIosArrowForward />
        </Link>
      </div>

      <div className="product-page-image relative p-4 sm:p-6 pt-16 sm:pt-20">
        <div className="absolute top-4 left-4 sm:left-16">
          <img className="product w-3/4 sm:w-2/3" src={Product} alt="Product" />
        </div>
        <img src={BannerBackground} alt="Banner Background" className="w-full" />
      </div>

      <div className="product-filter product-nav flex flex-col sm:flex-row items-center justify-between border-y-2 border-gray-300 gap-4 sm:gap-6 w-full py-4 px-4 sm:px-6 md:px-20">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <div className="relative">
            <button
              className="flex items-center gap-2 sm:gap-4  text-lg sm:text-xl border-2 border-gray-300 px-3 sm:px-4 py-1 sm:py-2"
              onClick={toggleDropdown}
            >
              <RiEqualizerLine />
              <span className="text-black ">CATEGORY</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => handleCategoryChange("All")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => handleCategoryChange("chocolate")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  Chocolate
                </button>
                <button
                  onClick={() => handleCategoryChange("cake")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  Cake
                </button>
                <button
                  onClick={() => handleCategoryChange("cookies")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  Cookies
                </button>
                <button
                  onClick={() => handleCategoryChange("hamper")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  Hamper
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 sm:gap-4  text-lg sm:text-xl border-2 border-gray-300 px-3 sm:px-4 py-1 sm:py-2"
              onClick={togglePriceDropdown}
            >
              <RiEqualizerLine />
              <span className="text-black ">PRICE</span>
            </button>
            {isPriceDropdownOpen && (
              <div className="absolute left-0 mt-2 w-[150px] bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => handlePriceChange("All")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => handlePriceChange("0-250")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  ₹0 - ₹250
                </button>
                <button
                  onClick={() => handlePriceChange("250-1000")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  ₹250 - ₹1000
                </button>
                <button
                  onClick={() => handlePriceChange("1000-1500")}
                  className="w-full px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100"
                >
                  ₹1000 - ₹1500
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link className="flex items-center gap-2 sm:gap-5">
            <span className="text-lg">SHOW</span>
            <span className="py-2 px-4 sm:py-3 sm:px-6 rounded-3xl border-2 border-gray-300 text-sm sm:text-lg text-lg text-gray-600">
              8
            </span>
          </Link>
          <Link className="flex items-center gap-2 sm:gap-5 text-lg mt-4 md:mt-0">
            <span className="text-lg">SORT BY</span>
            <span className="py-2 px-4 sm:py-3 sm:px-6 rounded-3xl border-2 border-gray-300 text-sm sm:text-lg text-lg text-black tracking-tighter">
              {selectedCategory} | {selectedPrice}
            </span>
          </Link>
        </div>
      </div>

      {/* Pass the selected category and price to ChoclateCards */}
      <ChoclateCards selectedCategory={selectedCategory} selectedPrice={selectedPrice} />

      <Footer />
    </div>
  );
};

export default Product_page;

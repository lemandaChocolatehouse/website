import { useContext, useEffect, useRef, useState } from "react";
import Image from "/assets/img/mainlogo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiIfixit } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useModal } from "./ModalContext"; // Import useModal
import AuthContext from "./AuthContext"; // Import AuthContext
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import {jwtDecode} from "jwt-decode"; // Correct import for jwtDecode
import { MdDashboard } from "react-icons/md"; // Import dashboard icon
import { CartContext } from "./CartContext"; // Import CartContext

export const Navbar = ({ isActive, menuBtn, activeLink, handleLinkClick }) => {
  const { openModal } = useModal(); // Use openModal from context
  const { isAuthenticated, logout } = useContext(AuthContext); // Access isAuthenticated and logout
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Store userEmail state
  const dropdownRef = useRef(null);
  const { cartItems, clearCart } = useContext(CartContext); // Access cartItems from context

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    // Retrieve the token from localStorage (or any storage where it's stored)
    const token = localStorage.getItem("authToken"); // Assuming token is stored in localStorage

    // Decode the token to extract the email
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserEmail(decodedToken.email); // Store email in state
    }

    // console.log(userEmail);
  }, [isAuthenticated]); // Re-run when `isAuthenticated` changes

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Navbar fixed top-0 flex items-center justify-between w-full py-3 px-4 bg-[#f5f5f5] text-black lg:z-[999]">
      {/* Logo */}
      <Link to="/" className="w-auto flex gap-3 h-[50px]">
        <img className="max-w-20 h-14 md:min-w-16" src={Image} alt="Logo" />
        <div className="w-auto h-auto hidden sm:flex flex-col text-3xl md:text-5xl font-cookie relative">
          <span>Lemanda</span>
          <span className="-bottom-1 md:-bottom-3 md:left-7 absolute text-base md:text-xl">Chocolate</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex lg:gap-10 xl:gap-20 px-10 py-2 border-2 border-[#000] rounded-full font-medium ml-40 lg:ml-0">
        {["Home", "About", "Product", "Contact"].map((item, index) => (
          <Link
            className={`${activeLink === item ? "active" : ""}`}
            onClick={() => {
              handleLinkClick(item);
              if (item === "Contact") openModal(); // Open modal on "Contact" click
            }}
            key={index}
            to={`/${
              item === "Product"
                ? "shop"
                : item === "About" || item === "Team"
                ? "about"
                : item.toLowerCase()
            }`}
          >
            {item}
          </Link>
        ))}
        <Link to="https://www.shiprocket.in/shipment-tracking/" target="_blank">
        <span className="">Track order</span>
        </Link>
      </div>

      {/* Shop Button, Heart Icon, and Hamburger Menu */}
      <div className="flex items-center gap-1 md:gap-3">
        <Link
          to="/wishlist"
          className="text-[#592D1E] text-2xl ml-4"
          onClick={() => handleLinkClick("Wishlist")}
        >
          <FaHeart size={20}/>
        </Link>
        <Link to="/shop/product/addtocart" className="mq450:mx-1 mx-4">
          <FaCartArrowDown size={24} color="#592d1e" />
        </Link>

        <Link
          to="/shop"
          className="px-7 py-2 rounded-full bg-[#592D1E] text-xl tracking-wider text-white bebas shadow-md shadow-[#0000005a] hidden xl:block"
          onClick={() => handleLinkClick("Shop")}
        >
          SHOP
        </Link>
       

        {/* Conditionally render Dashboard for admin */}
        {isAuthenticated && userEmail === "admin@gmail.com" && (
          <Link to="/admin/dashboard" className="text-[#592D1E] mx-4">
            <MdDashboard size={30} />
          </Link>
        )}

        {/* Conditionally render Login or Logout */}
        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white focus:outline-none mr-2"
            >
              <FaUserCircle size={40} color="#592d1e" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <a
                  href="/profile-page"
                  className="flex justify-center px-4 py-2 text-xl bebas text-gray-800 hover:bg-gray-200"
                >
                  View Profile
                </a>
                <Link
                  to="/login"
                  className="flex justify-center px-4 py-2 text-xl text-gray-800 hover:bg-gray-200 bebas"
                  onClick={() => {
                    logout(); // Call logout function
                    handleLinkClick("Logout");
                    clearCart(); // Clear cart on logout
                    
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-7 py-2 rounded-full bg-[#592D1E] text-xl text-white font-black shadow-md shadow-[#0000005a] bebas tracking-wider"
            onClick={() => handleLinkClick("Login")}
          >
            Login
          </Link>
        )}

        {/* Hamburger Menu for Mobile */}
        <div onClick={menuBtn} className="lg:hidden">
          {isActive === false ? (
            <span className="text-[#592D1E]">
              <GiHamburgerMenu size={40} />
            </span>
          ) : (
            <span className="text-[#592D1E]">
              <SiIfixit size={40}/>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

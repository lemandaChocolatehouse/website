import { useState } from "react";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDesc from "./components/ProductDescription";
import Cart from "./components/Cart";
import About from "./components/About";
import Product from "./components/Product_page";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist"; // Import the Wishlist component
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { ModalProvider } from "./components/ModalContext"; // Import ModalProvider
// import SignUpSignIn from "./components/SignUp";
import { AuthProvider } from "./components/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./components/Checkout";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { ProfilePage } from "./components/ProfilePage";
import Payment from "./components/Payment";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isActive, setisActive] = useState(false);
  const menuBtn = () => {
    setisActive(!isActive);
  };

  // State to track the activeLink and scroll state.
  const [activeLink, setActiveLink] = useState("Home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AuthProvider>
      <ModalProvider>
        {" "}
        {/* Wrap your application with ModalProvider */}
        <div className="w-full h-screen">
          <Navbar
            isActive={isActive}
            menuBtn={menuBtn}
            handleLinkClick={handleLinkClick}
            activeLink={activeLink}
          />
          <div
            className={
              isActive === false
                ? "mobile-menu-slider-off"
                : "mobile-menu-slider-on"
            }
          >
            {["Home", "About", "Shop", "Wishlist", "Contact"].map(
              (item, index) => (
                <Link
                  className={`${activeLink === item ? "active" : ""}`}
                  onClick={() => {
                    handleLinkClick(item);
                    setisActive(false);
                  }}
                  key={index}
                  to={`/${index !== 0 ? item.toLowerCase() : ""}`}
                >
                  {item}
                  <RiArrowLeftDoubleFill />
                </Link>
              )
            )}
          </div>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop/product" element={<ProductDesc />} />
            <Route path="/shop/product/addtocart" element={<Cart />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />{" "}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* Add Wishlist route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ModalProvider>
    </AuthProvider>
  );
};

export default App;

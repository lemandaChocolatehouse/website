import { useState, useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CartContext } from "../CartContext";
import { convertImageToBase64 } from "../../utils";

export const Product1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Get product data from location state
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useContext(CartContext);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <p>Loading...</p>; // Show a loading state or message while fetching
  }

  // const handleAddToCart = () => {
  //   if (product) {
  //     addToCart({
  //       id: product.id || product.name, // Ensure there is a unique id, fallback to name if not available
  //       name: product.name,
  //       price: product.price,
  //       Image: product.Image,
  //       quantity,
  //     });
  //     navigate('/shop/product/addtocart'); // Navigate to cart page after adding item
  //   } else {
  //     console.error("Product not found");
  //   }
  // };

  return (
    <div className="productdesc w-full pt-16 pb-5 mt-8 md:mt-2">
      <div className="product-nav flex items-center gap-7 w-full pt-4 pb-3 px-20">
        <Link to="/home" className="flex items-center gap-4 font-semibold">
          <span className="text-[grey]">HOME</span> <IoIosArrowForward />
        </Link>
        <Link to="/shop" className="flex items-center gap-4 font-semibold">
          <span className="text-[grey]">SHOP</span> <IoIosArrowForward />
        </Link>
        <div className="flex items-center">
          <span className="text-base md:text-2xl font-bold mr-4">|</span>{" "}
          <span className="text-base md:text-2xl font-bold mt-1">
            {product.name}
          </span>
        </div>
      </div>
      <div className="product-image-section flex px-12">
        <div className="productdesc-left flex w-[50%] h-[82vh] justify-around p-5">
          <div className="hr-boxs w-[20%] h-full flex flex-col items-center justify-between mr-6">
            <div
              className="hr-box  w-20 h-20 md:w-40 md:h-40 rounded-3xl shadow-lg shadow-[#000000ab]"
              style={{
                backgroundImage: `url(${convertImageToBase64(
                  product?.Image1
                )})`,
                backgroundSize: "cover",
              }}
            />
            <div
              className="hr-box  w-20 h-20 md:w-40 md:h-40 rounded-3xl shadow-lg shadow-[#000000ab]"
              style={{
                backgroundImage: `url(${convertImageToBase64(
                  product?.Image2
                )})`,
                backgroundSize: "cover",
              }}
            />
            <div
              className="hr-box w-20 h-20 md:w-40 md:h-40 rounded-3xl shadow-lg shadow-[#000000ab]"
              style={{
                backgroundImage: `url(${convertImageToBase64(
                  product?.Image3
                )})`,
                backgroundSize: "cover",
              }}
            />
          </div>

          <div
            className="productdesc-left-right w-[76%] h-full bg-[#c4c4c4] rounded-3xl shadow-lg shadow-[#000000ab] bg-cover bg-center"
            style={{
              backgroundImage: `url(${convertImageToBase64(product?.Image)})`,
            }}
          ></div>
        </div>
        <div className="productdesc-right w-[50%] h-[82vh] p-5">
          <div className="productdesc-right-child w-full h-full flex flex-col items-center pt-6 px-3 gap-3 border border-[#dadada] rounded-3xl overflow-hidden">
            <div className="flex justify-between w-full p-5 px-4">
              <h1 className="font-medium text-lg font-poppins ">
                ⭐ {product.rating || "N/A"} •{" "}
                <Link className="underline">
                  {product.reviews || "0"} reviews
                </Link>
              </h1>
              <div>
                <h1 className="text-2xl font-medium font-bebas">₹{product.price}</h1>
                <h2 className="line-through text-xl text-[#63624b] text-end font-bebas">
                  ₹{product.originalPrice || "0"}
                </h2>
              </div>
            </div>
            <div className="flex justify-between w-full p-7 pr-4 pl-5">
              <div className="quantity flex items-center gap-2 text-2xl font-poppins">
                <div
                  className="subtract w-6 h-6 rounded-full flex items-center justify-center border border-black cursor-pointer"
                  onClick={decrementQuantity}
                >
                  <RiSubtractFill />
                </div>
                {quantity}
                <div
                  className="add w-6 h-6 rounded-full flex items-center justify-center border border-black cursor-pointer"
                  onClick={incrementQuantity}
                >
                  <IoMdAdd />
                </div>
              </div>
              <button
                className="cart-btn flex items-center gap-3 py-3 px-4 rounded-full bg-[#833829] text-white font-medium font-poppins"
                onClick={() => {
                  addToCart(product, quantity);
                  navigate("/shop/product/addtocart");
                }}
              >
                <IoBagHandleOutline /> Add to cart
              </button>
            </div>
            <div className="aman flex justify-between w-full p-7 pr-4 pl-5 font-bebas">
              <div>
                <h1 className="text-xl font-medium text-[#63624b]">
                  ₹{product.price}
                </h1>
                <h1 className="tax text-xl font-bold text-[#63624b] mt-2">
                  TAX ESTIMATE
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  {" "}
                  ₹{(product.price * quantity).toFixed(2)}
                </h1>
                <h1 className="tax text-xl text-[#63624b] text-end mt-2">₹0</h1>
              </div>
            </div>
            <div className="flex justify-between w-full p-7 pr-4 pl-5 border-t-2 border-[#dadada] font-bebas">
              <h1 className="text-2xl font-bold text-[#63624b]">TOTAL</h1>
              <h1 className="text-xl font-medium text-[#63624b]">
                ₹{(product.price * quantity).toFixed(2)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoBagHandleOutline } from "react-icons/io5";
import { CartContext } from '../CartContext'; // Import useCart hook to manage cart
// import { convertImageToBase64 } from '../../utils'; // Import utility function to convert image to base64

const ChoclateCards1 = () => {

  const backend = import.meta.env.VITE_BACKEND_URL; // Get the backend URL from Vite env
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [products, setProducts] = useState([]); // State for product data
  const { addToCart } = useContext(CartContext);

  // Fetch data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backend}/api/v1/products`); // Replace with your actual API endpoint
        const data = await response.json();
        setProducts(data); // Assuming data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="flex flex-wrap justify-center gap-20 px-3">
        {(showMore ? products : products.slice(0, 3)).map((item, index) => (
          <div
            key={index}
            className="relative choc-card-compo flex flex-col items-center p-2 gap-2 w-80 bg-white rounded-2xl shadow-xl shadow-[#dadada] h-[300px]"
          >
            <div
              onClick={() => handleClick('/shop/product')}
              className="choc-card-image-container flex items-center justify-center overflow-hidden h-40 w-40 rounded-[+5px] bg-gray-100 cursor-pointer"
            >
              <img src={item.Image} alt={item.name} className="object-cover h-full w-full" />
            </div>
            <h1
              onClick={() => handleClick('/shop/product')}
              className="font-black text-lg cursor-pointer font-beach"
            >
              {item.name}
            </h1>
            <p className="px-4 text-sm text-center text-[#ae5e5e]  font-beach">
              {item.desc}
            </p>
            <button
              onClick={() => {
                addToCart(item);
              }}
              className="flex items-center justify-center gap-2 bg-[#592D1E] text-white mt-3 text-sm font-semibold px-3 py-2 rounded-full font-poppins"
            >
              <IoBagHandleOutline /> Add to cart
            </button>
            <div
              className="choc-card-price-compo shadow-md shadow-black absolute -top-6 -right-5 w-16 h-16 rounded-full bg-[#592D1E] flex items-center justify-center text-white text-sm"
            >
              <h1 className='prev-price text-center leading-4 font-semibold font-bebas text-lg'>
                ₹{item.price} <br />
                {/* <span className='text-xs line-through text-[#d18b73] font-medium'>
                  ₹{item.originalPrice}
                </span> */}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-2xl font-medium border-b-4 border-black py-2 mt-6"
      >
        {showMore ? 'View less' : 'View more...'}
      </button>
    </div>
  );
};

export default ChoclateCards1;

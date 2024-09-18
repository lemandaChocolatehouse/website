// src/components/Wishlist.js
import { useEffect, useState , useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext)

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  

  return (
    <div>
      <h1 className="text-center text-xl md:text-3xl font-bold text-red-600 mt-20 mb-10">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8 mx-4">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="card border rounded-lg overflow-hidden shadow-lg flex flex-col col-span-1"
            >
              <div className="relative w-full pb-[75%]">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-sm  md:text-xl font-bold h-[60px] md:h-[40px]">
                  {item.name}
                </h3>
                <p className="text-gray-600 md:mt-4">₹{item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <Link
                  to="/shop/product/addtocart"
                  className="inline-block"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  <button className="my-4 py-2 px-4 mr-4 bg-[#592D1E] text-white rounded-md hover:bg-gray-800 text-sm sm:text-base">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="rounded-md text-sm sm:text-base bg-red-500 text-white font-bold px-4 py-2"
                  >
                    Remove
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

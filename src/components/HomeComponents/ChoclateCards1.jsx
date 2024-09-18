import  { useState,useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { IoBagHandleOutline } from "react-icons/io5";
import Cake3 from "/assets/img/crackle.jpg";
import Cake4 from "/assets/img/nut.jpg";
import Cake5 from "/assets/img/azwine.jpg";
import Cake6 from "/assets/img/dark.jpg";
import Cake7 from "/assets/img/milk.jpg";
import Cake8 from "/assets/img/pista.jpg";
import { CartContext} from '../CartContext';// Import useCart hook to manage cart

const initialCardData = [
  { product_id: 25,name: "CRACKLE CHOCLATE", desc: "Rich and creamy chocolate with a hint of roasted nuts. Perfect for a sweet indulgence.", Image: Cake3, price: 110, originalPrice: 140 },
  { product_id:26 ,name: "FRUIT AND NUT CHOCLATE", desc: "Delicious chocolate loaded with a mix of dried fruits and crunchy nuts. A perfect snack for any time.", Image: Cake4, price: 210, originalPrice: 250 },
  { product_id:27, name: "AZWINE COOKIE", desc: "Chewy and soft azwine cookie with a delightful nutty flavor. An ideal treat for almond lovers.", Image: Cake5, price: 310, originalPrice: 350 },
];

const additionalCardData = [
  { product_id: 28 ,name: "DARK CHOCOLATE", desc: "Intense dark chocolate with a smooth texture and deep flavor. Ideal for those who prefer a rich taste.", Image: Cake6, price: 120, originalPrice: 160 },
  { product_id: 29,name: "MILK CHOCOLATE", desc: "Creamy milk chocolate that is perfect for any occasion. A classic choice for all chocolate enthusiasts.", Image: Cake7, price: 150, originalPrice: 190 },
  { product_id: 30 ,name: "PISTA COOKIE", desc: "Smooth and creamy cookie with a hint of pista. A sweet and indulgent treat.", Image: Cake8, price: 160, originalPrice: 200 },
];

const ChoclateCards1 = () => {
  const navigate = useNavigate();
   // Use the addToCart function from the context
  const [showMore, setShowMore] = useState(false);

  const handleClick = (url) => {
    navigate(url);
  };
  const {  addToCart } = useContext(CartContext)

  // const handleAddToCart = (item) => {
  //   addToCart({
  //     id: item.name, // Using name as an identifier, you can replace it with a unique id if available
  //     name: item.name,
  //     price: item.price,
  //     Image: item.Image,
  //     quantity: 1,
  //   });
  //   navigate('/shop/product/addtocart'); // Navigate to cart page after adding item
  // };

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="flex flex-wrap justify-center gap-20">
        {(showMore ? [...initialCardData, ...additionalCardData] : initialCardData).map((item, index) => (
          <div
            key={index}
            className="relative choc-card-compo flex flex-col items-center p-2 gap-2 w-80 bg-white rounded-2xl shadow-xl shadow-[#dadada] h-[300px]"
          >
            <div
              onClick={() => handleClick('/shop/product')}
              className="choc-card-image-container flex items-center justify-center overflow-hidden h-40 w-40 rounded-[+5px] bg-gray-100 cursor-pointer" // Square shape with 25px border-radius
            >
              <img src={item.Image} alt={item.name} className="object-cover h-full w-full" />
            </div>
            <h1
              onClick={() => handleClick('/shop/product')}
              className="font-black text-lg cursor-pointer"
            >
              {item.name}
            </h1>
            <p className="px-4 text-sm text-center text-[#ae5e5e] font-semibold">
              {item.desc}
            </p>
            <button
              onClick={() => {
                addToCart(item)
              } }// Call addToCart when button is clicked
              className="flex items-center justify-center gap-2 bg-[#592D1E] text-white mt-3 text-sm font-semibold px-3 py-2 rounded-full"
            >
              <IoBagHandleOutline /> Add to cart
            </button>
            <div
              className="choc-card-price-compo shadow-md shadow-black absolute -top-6 -right-5 w-16 h-16 rounded-full bg-[#592D1E] flex items-center justify-center text-white text-sm"
            >
              <h1 className='prev-price text-center leading-4 font-semibold'>
                ₹{item.price} <br />
                <span className='text-xs line-through text-[#d18b73] font-medium'>
                  ₹{item.originalPrice}
                </span>
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

import { useState, useEffect, useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Heading3 from "/assets/img/heading3.png";
import { CartContext } from "../CartContext";
import axios from "axios";
import Cart from "../Cart";
// import { convertImageToBase64 } from "../../utils";
import Choco1 from "/assets/img/choco1.png";
import Choco2 from "/assets/img/choco2.png";
import Choco3 from "/assets/img/choco3.png";
import Choco4 from "/assets/img/choco4.png";
import Choco5 from "/assets/img/choco5.png";


const Section3 = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const [category, setCategory] = useState("ALL");
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get(`${backend}/api/v1/products`)
      .then((response) => {
        // Assuming the response data is an array of products directly
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    category === "ALL"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <>
      <style>
        {`
          .choclate-cards-container {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            position: relative;
            margin-top: 1rem;
          }
          .choclate-cards-wrapper {
            display: flex;
            flex-direction: row;
            gap: 3rem;
            padding: 3rem 4rem;;
            overflow-x: auto; 
            scrollbar-width: none; 
            -ms-overflow-style: none;
        }
            
          .choc-card {
            flex: 0 0 auto;
            width: 28rem;
            height: auto;
            position: relative;
          }
          .choc-card-description {
            white-space: normal;
            font-size: 0.875rem;
          }
          .choc-card img {
            height: 300px;
            object-fit: cover;
          }
          .choc-card h1 {
            white-space: normal;
            text-align: center;
          }
          .view-detail-button {
            background-color: #6C2B15;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            transition: background-color 1s ease;
          }
          .view-detail-button:hover {
            background-color: #5a2a13;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @media (max-width: 768px) {
            .choc-card {
              width: 14rem;
            }
            .choc-card img {
              height: 150px;
              object-fit: cover;
            }
          }
        `}
      </style>

      <div className="section3 w-full py-10 pb-14 text-center relative">
        <img src={Choco1} alt="Choco 1" className="absolute top-16 left-10 w-40" />
        <img src={Choco3} alt="Choco 1" className="absolute top-16 right-10 w-32" />
        <img src={Choco4} alt="Choco 1" className="absolute top-48 right-[25vw] w-10" />
        <img src={Choco5} alt="Choco 1" className="absolute bottom-5 right-5 w-32" />
        <img src={Choco2} alt="Choco 1" className="absolute bottom-48 left-0 w-20" />
        <div className="w-full flex items-center justify-center pb-7">
          <img className="heading-3 w-1/2" src={Heading3} alt="Heading" />
        </div>
        <div className="section3-links flex text-[12px] md:text-2xl items-center justify-center md:gap-3 w-full md:p-5 py-6 md:py-1 bebas tracking-widest">
          {["ALL", "CHOCOLATE", "COOKIES", "CAKE"].map((item) => (
            <button
              className={`px-6 py-2 font-bebas ${category.toUpperCase() === item
                ? "bg-[#592D1E] text-white uppercase rounded-full"
                : "bg-none uppercase"
                }`}
              key={item}
              onClick={() =>
                setCategory(item === "ALL" ? "ALL" : item.toLowerCase())
              }
            >
              {item}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="w-full flex justify-center text-2xl font-bold my-10 text-[#592d1e]">Crafting delights...</p>
        ) : error ? (
          <p className="w-full flex justify-center">
            Error loading products: {error}
          </p>
        ) : (
          <div className="choclate-cards-container">
            <div className="choclate-cards-wrapper w-full">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group choc-card flex flex-col justify-between items-center pb-5 md:py-5 gap-3 bg-white rounded-3xl shadow-xl shadow-[#dadada] "
                  >
                    <div className="w-full h-auto flex flex-col gap-3 items-center">
                      <div
                        onClick={() => navigate(`/shop/product`, { state: { product: item } })}
                        className="choc-card-child1 flex items-center justify-center w-[80%] h-[50%] cursor-pointer rounded-2xl overflow-hidden"
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={item.Image}
                          alt={item.name}
                        />
                      </div>

                      <h1
                        onClick={() => navigate(`/shop/product`, { state: { product: item } })}
                        className="text-xl cursor-pointer font-beach"
                      >
                        {item.name}
                      </h1>
                      <p className="hidden font-beach md:block text-base text-center choc-card-description">
                        {item.desc}
                      </p>
                    </div>
                    <Link
                      className="font-beach bg-[#6C2B15] text-white px-3 py-1.5 rounded-md md:hover:bg-[#5a2a13] active:bg-[#5a2a13] flex justify-center items-center"
                      to={`/shop/product/`}
                      state={{ product: item }}
                    >
                      View Detail
                    </Link>
                    <div className="bg-[#f5f5f5] w-24 h-24 absolute -top-4 -right-6 rounded-full flex justify-center items-center md:w-28 md:h-28">
                      <button
                        onClick={() => {
                          addToCart(item);
                          navigate("/shop/product/addtocart");
                        }}
                        className="shadow-md shadow-black  w-20 h-20 rounded-full bg-[#592D1E] flex items-center justify-center text-white text-3xl font-serif font-bold"
                      >
                        <IoBagHandleOutline className="group-hover:animate-rotate360" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="w-full flex justify-center text-2xl font-bold my-10 text-[#592d1e]">No products found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Section3;

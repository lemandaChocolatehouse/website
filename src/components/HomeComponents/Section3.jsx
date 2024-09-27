import { useState, useEffect, useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Heading3 from "/assets/img/heading3.png";
import { CartContext } from "../CartContext";
import axios from "axios";
import Cart from "../Cart";
import { convertImageToBase64 } from "../../utils";

const Section3 = () => {
  const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
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
            gap: 2rem;
            padding: 1rem;;
           overflow-x: auto; 
  scrollbar-width: none; 
  -ms-overflow-style: none;
        }
            
          .choc-card {
            flex: 0 0 auto;
            width: 20rem;
            height: auto;
            position: relative;
          }
          .choc-card-description {
            white-space: normal;
            font-size: 0.875rem;
          }
          .choc-card img {
            height: 200px;
            object-fit: cover;
          }
          .choc-card h1 {
            white-space: normal;
            text-align: center;
            font-size: 1.25rem;
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
              height: 20rem;
            }
            .choc-card img {
              height: 150px;
              object-fit: cover;
            }
          }
        `}
      </style>

      <div className="section3 w-full py-10 pb-14 text-center ">
        <div className="w-full flex items-center justify-center pb-7">
          <img className="heading-3 w-1/2" src={Heading3} alt="Heading" />
        </div>
        <div className="section3-links flex text-[12px] md:text-2xl items-center justify-center md:gap-3 w-full md:p-5 py-6 md:py-1 bebas tracking-widest">
          {["ALL", "CHOCOLATE", "COOKIES", "CAKE"].map((item) => (
            <button
              className={`px-6 py-2 ${
                category.toUpperCase() === item
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
                    className="choc-card flex flex-col items-center pt-5 gap-3 bg-white rounded-3xl shadow-xl shadow-[#dadada]"
                  >
                    <div
                      onClick={() =>
                        navigate(`/shop/product`, { state: { product: item } })
                      }
                      className="choc-card-child1 flex items-center justify-center w-[85%] h-[50%] cursor-pointer rounded-2xl"
                    >
                      <img
                        className="scale-[0.8]"
                        src={convertImageToBase64(item.Image)}
                        alt={item.name}
                      />
                    </div>
                    <h1
                      onClick={() =>
                        navigate(`/shop/product`, { state: { product: item } })
                      }
                      className="text-xl cursor-pointer font-beach"
                    >
                      {item.name}
                    </h1>
                    <p className="hidden font-beach md:block  px-9 text-base text-center choc-card-description">
                      {item.desc}
                    </p>
                    <Link
                      className="view-detail-button mt-4 pb-1 font-beach"
                      to={`/shop/product/`}
                      state={{ product: item }}
                    >
                      View Detail
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(item);
                        navigate("/shop/product/addtocart");
                      }}
                      className="choc-card-price shadow-md shadow-black absolute -top-4 -right-6 w-20 h-20 rounded-full bg-[#592D1E] flex items-center justify-center text-white text-3xl font-serif font-bold"
                    >
                      <IoBagHandleOutline />
                    </button>
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

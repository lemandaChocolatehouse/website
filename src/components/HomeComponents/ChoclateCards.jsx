import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { CartContext } from "../CartContext";
import { convertImageToBase64 } from "../../utils";
import PropTypes from "prop-types";
// import Cart from "../Cart";

const ITEMS_PER_PAGE = 8;



const ChoclateCards = ({ selectedCategory, selectedPrice }) => {

  const backend = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get(`${backend}/api/v1/products`)
      .then((response) => {
        setProducts(response.data); // Adjust based on your actual API response format
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter products based on selectedCategory and selectedPrice
    const filterProducts = () => {
      const categoryMatch = (product) => {
        if (selectedCategory === "All") return true;
        return (
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      };

      const priceMatch = (price) => {
        if (selectedPrice === "All") return true;
        const [minPrice, maxPrice] = selectedPrice.split("-").map(Number);
        return price >= minPrice && price <= maxPrice;
      };

      const filtered = products.filter(
        (product) => categoryMatch(product) && priceMatch(product.price)
      );
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedCategory, selectedPrice, products]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div className="w-full flex justify-center text-2xl font-bold my-10 text-[#592d1e]">Crafting Delights.......
</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div
              key={product.product_id}
              className="card border rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full pb-[75%]">
                <img
                  src={convertImageToBase64(product.Image)}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-sm md:text-xl font-bold h-[60px] md:h-[40px] font-beach">
                  {product.name}
                </h3>
                <p className="text-gray-600 md:mt-4">₹{product.price}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <Link
                  to="/shop/product/addtocart"
                  className="inline-block"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <button className="mt-4 py-2 px-4 bg-[#592D1E] text-white rounded-lg hover:bg-gray-800 text-sm sm:text-base">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-2xl font-bold my-10 text-[#592d1e]">
            No products found !!!
          </p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="pagination flex flex-wrap justify-center gap-2 py-4">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm sm:text-base"
          >
            Previous
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`py-2 px-4 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#592D1E] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } text-sm sm:text-base`}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm sm:text-base"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

ChoclateCards.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  selectedPrice: PropTypes.string.isRequired,
};

export default ChoclateCards;

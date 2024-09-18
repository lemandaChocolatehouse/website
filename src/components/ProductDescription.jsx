
import { Product1 } from "./ProductComponents/Product1";
import AllProducts from "./ProductComponents/AllProducts";
import Footer from "./Footer";

const ProductDescription = () => {
  return (
    <div className="product w-full">
      <Product1 />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default ProductDescription;

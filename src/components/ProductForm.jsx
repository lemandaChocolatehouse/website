import { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ product, closePopup, refreshProducts }) => {
  const [formData, setFormData] = useState({
    name: product ? product.name : "",
    product_id: product ? product.product_id : "",
    desc: product ? product.desc : "",
    price: product ? product.price : 0,
    category: product ? product.category : "",
    quantity: product ? product.quantity : "",
    countInStock: product ? product.countInStock : 0,
  });
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  // Update form data when product prop changes
  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    }
  }, [product]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "Image") {
      setMainImage(files[0]);
    } else if (name === "images") {
      setImages(Array.from(files));
    }
  };

  // Check if product_id exists
  const checkProductIdExists = async (product_id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products?product_id=${product_id}`);
      return response.data.length > 0; // If product_id exists in the response
    } catch (error) {
      console.error("Error checking product ID:", error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if product_id exists (only for new products)
    if (!product) {
      const exists = await checkProductIdExists(formData.product_id);
      if (exists) {
        alert("Product ID already exists");
        return;
      }
    }

    // Create form data object for file uploads
    const data = new FormData();
    data.append("name", formData.name);
    data.append("product_id", formData.product_id);
    data.append("desc", formData.desc);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("quantity", formData.quantity);
    data.append("countInStock", formData.countInStock);
    if (mainImage) data.append("Image", mainImage); // Add main image
    images.forEach((image, index) => data.append(`images`, image)); // Add additional images

    try {
      if (product) {
        // Update existing product
        await axios.put(`http://localhost:8000/api/v1/products/${product._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product updated successfully!");
      } else {
        // Create new product
        await axios.post(`http://localhost:8000/api/v1/products`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product created successfully!");
      }
      refreshProducts();
      closePopup();
    } catch (error) {
      console.error("Error saving product:", error);
      setError("Failed to save product");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{product ? "Edit Product" : "Create Product"}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Editable fields */}
          <label className="block mb-4">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Product ID:
            <input
              type="text"
              name="product_id"
              value={formData.product_id}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
              disabled={!!product} // Disable editing for existing product
            />
          </label>
          <label className="block mb-4">
            Main Image:
            <input
              type="file"
              name="Image"
              onChange={handleFileChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
            />
          </label>
          <label className="block mb-4">
            Additional Images:
            <input
              type="file"
              name="images"
              onChange={handleFileChange}
              multiple
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
            />
          </label>
          <label className="block mb-4">
            Description:
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Category:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Quantity:
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
            />
          </label>
          <label className="block mb-4">
            Count in Stock:
            <input
              type="number"
              name="countInStock"
              value={formData.countInStock}
              onChange={handleChange}
              className="block w-full mt-1 border border-gray-300 p-2 rounded"
              required
            />
          </label>

          {/* Action buttons */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
            {product ? "Save Changes" : "Create Product"}
          </button>
          <button type="button" onClick={closePopup} className="bg-gray-500 text-white py-2 px-4 rounded">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

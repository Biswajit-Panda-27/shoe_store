import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import axios from "axios";

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to view product details");
      navigate("/login");
    }
  }, [navigate]);



  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-lg text-gray-500">
          No product details available.
        </div>
      </div>
    );
  }

  const addToCart = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://shoe-store-backend-fh5q.onrender.com//api/cart/add",
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert("Product added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  const discount = product.actualPrice - product.price;
  const discountPercentage = ((discount / product.actualPrice) * 100).toFixed(0);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-8 lg:px-16">
      <Link to="/showProducts" className="flex items-center text-gray-700 mb-4">
        <IoMdArrowBack className="mr-2" />
        Back to Products
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 flex flex-col items-center">
          <img
            src={product.pimage}
            alt={product.pname}
            className="w-full h-72 object-cover rounded mb-5 shadow-lg"
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={addToCart}
              className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {product.pname}
            </h1>
            <p className="text-gray-600 mt-1">{product.details}</p>

            <div className="flex items-center mt-4">
              <span className="flex items-center text-sm bg-green-500 text-white px-2 py-1 rounded">
                {product.prating} <FaStar className="ml-1" />
              </span>
              <span className="text-gray-500 ml-3">
                ({product.previews} reviews)
              </span>
            </div>

            <div className="mt-6">
              <p className="flex items-center text-gray-600">
                Extra <MdCurrencyRupee className="mx-1" />
                {discount} off
              </p>
              <p className="text-3xl font-bold text-gray-800 flex items-center gap-4 mt-2">
                <MdCurrencyRupee />
                {product.price}
                <span className="text-lg text-gray-400 line-through">
                  {product.actualPrice}
                </span>
                <span className="text-lg text-green-600">
                  {discountPercentage}% off
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

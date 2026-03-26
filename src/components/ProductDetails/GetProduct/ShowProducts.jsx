// ShowProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceSort from "../../ProductFilters/PriceSort";
import PriceRangeFilter from "../../ProductFilters/PriceRange.jsx";
import RatingFilter from "../../ProductFilters/Rating.jsx";
import StockFilter from "../../ProductFilters/StockFilter";
import DiscountFilter from "../../ProductFilters/DiscountFilter";
import ClearFilter from "../../ProductFilters/ClearFilters.jsx";
import { useNavigate } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/products/getAll", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }; 

  const applyFilters = (filters) => {
    let updatedProducts = [...products]; 

    if (filters.sortByPriceRange) {
      updatedProducts =
        filters.sortByPriceRange === "lowToHigh"
          ? updatedProducts.sort((a, b) => a.price - b.price)
          : updatedProducts.sort((a, b) => b.price - a.price);
    }

    if (filters.priceRange) {
      updatedProducts = updatedProducts.filter(
        (p) =>
          p.price >= filters.priceRange.minPrice &&
          p.price <= filters.priceRange.maxPrice
      );
    }

    if (filters.rating) {
      updatedProducts = updatedProducts.filter(
        (p) => p.prating >= filters.rating
      );
    }

    if (filters.inStock) {
      updatedProducts = updatedProducts.filter((p) => p.inStock === true);
    }

    if (filters.discount) {
      updatedProducts = updatedProducts.filter(
        (p) =>
          ((p.actualPrice - p.price) / p.actualPrice) * 100 >= filters.discount
      );
    }
    setFilteredProducts(updatedProducts);
  };

  const clearFilters = () => {
    setFilteredProducts(products);
  };

  const clickToShowDetails = (product) => {
    navigate(`/details/${product._id}`, { state: { product } });
  };

  return (
    <div className="flex flex-col">
      {/* Filter Components */}
      <div className="flex flex-row col-span-2 bg-slate-100">
        <PriceSort
          onSortChange={(sortByPriceRange) =>
            applyFilters({ sortByPriceRange })
          }
        />
        <PriceRangeFilter
          onPriceRangeChange={(priceRange) => applyFilters({ priceRange })}
        />
        <RatingFilter onRatingChange={(rating) => applyFilters({ rating })} />
        <StockFilter onStockChange={(inStock) => applyFilters({ inStock })} />
        <DiscountFilter
          onDiscountChange={(discount) => applyFilters({ discount })}
        />
        <ClearFilter onClearFilters={clearFilters} />
      </div>

      {/* Product Display */}
      <div className="grid grid-cols-1 col-span-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 bg-slate-100 ">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <img
              onClick={() => clickToShowDetails(product)}
              src={product.pimage}
              alt={product.pname}
              className="w-full h-40 object-cover rounded"
            />
            <h3>{product.pname}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;

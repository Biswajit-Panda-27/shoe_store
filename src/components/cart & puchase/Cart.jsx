import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce"; // Install lodash if not already installed

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "https://shoe-store-backend-fh5q.onrender.com/:5000/api/cart/get",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setCartItems(res.data);
      } catch (error) {
        console.error(error.message);
        setError("Failed to load cart items.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate total amount whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) =>
        item.productId !== null
          ? sum + item.productId.price * item.quantity
          : sum,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  const handleDeleteItem = useCallback(async (productId) => {
    console.log("Deleting product ID:", productId); // Add this
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://shoe-store-backend-fh5q.onrender.com/api/cart/deleteItem/${productId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
      setError("Failed to delete item.");
    }
  }, []);

  // Debounced API call to update quantity
  const updateQuantity = useCallback(
    debounce(async (productId, quantity) => {
      const token = localStorage.getItem("token");
      try {
        await axios.put(
          "https://shoe-store-backend-fh5q.onrender.com/api/cart/updateItem",
          { productId, quantity },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } catch (error) {
        console.error("Error updating quantity:", error.message);
        setError("Failed to update quantity.");
      }
    }, 500),
    []
  );

  const handleQuantityChange = (productId, newQuantity) => {
    // Update the local state
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId !== null && item.productId._id === productId
          ? { ...item, quantity: Math.max(newQuantity, 1) }
          : item
      )
    );

    // Trigger the debounced API call
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="cart-page bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
      {error && <p className="text-red-600">{error}</p>}
      {isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={
                item.productId ? item.productId._id : `fallback-key-${index}`
              }
              className="cart-item bg-white shadow-sm p-4 flex gap-4"
            >
              {item.productId ? (
                <>
                  <button
                    onClick={() => handleDeleteItem(item.productId._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <img
                    src={item.productId.pimage}
                    alt={item.productId.pname}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.productId.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">Quantity:</p>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId._id,
                            item.quantity - 1
                          )
                        }
                        className="px-2 bg-gray-300 hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId._id,
                            item.quantity + 1
                          )
                        }
                        className="px-2 bg-gray-300 hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-600">
                      Price: ₹{item.productId.price}
                    </p>
                    <p className="text-gray-600">
                      Subtotal: ₹{item.productId.price * item.quantity}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-red-600">Product details unavailable.</p>
              )}
            </div>
          ))}

          <div className="mt-4 text-right">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Amount: ₹{totalAmount}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

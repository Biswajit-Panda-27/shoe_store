// Checkout.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart data on component mount
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const items = response.data.items || [];
        setCartItems(items);

        // Calculate total price
        const total = items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleConfirmOrder = () => {
    // For now, you can just log or send data to the backend
    alert('Order confirmed! Proceeding to payment...');
    // Navigate to a payment page or handle payment process
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding.</p>
      ) : (
        <div className="checkout-summary">
          <div className="checkout-items">
            <h2>Items in Your Cart:</h2>
            {cartItems.map((item) => (
              <div key={item.productId} className="checkout-item">
                <img src={item.image} alt={item.pname} />
                <div>
                  <p>{item.pname}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <p>Total Price: ${totalPrice}</p>
          </div>
          <div className="checkout-actions">
            <button onClick={() => navigate('/cart')}>Back to Cart</button>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserProfile/UserContext"; // Import UserContext
import NavBar from "./components/Navigation/NavBar";
import LandingPage from "./components/Home/LandingPage";
import Login from "./components/UserProfile/Login";
import Signup from "./components/UserProfile/Signup";
import UserProfile from "./components/UserProfile/UserProfile";
// import ProtectedRoute from "./components/UserProfile/ProtectedRoute";
import ProductDetails from "./components/ProductDetails/GetProduct/ProductDetails";
import ShowProducts from "./components/ProductDetails/GetProduct/ShowProducts";
import Cart from "./components/cart & puchase/Cart";
// import Checkout from "./components/cart & puchase/Checkout";

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<LandingPage />} />
              <Route path="/showProducts" element={<ShowProducts />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/addToCart" element={<Cart />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;

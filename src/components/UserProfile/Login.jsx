import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData // Send formData as the second argument
      );
      localStorage.setItem("token", response.data.token); // Store token on successful login
      setUser(response.data.user); // Update user context with the logged-in user
      navigate("/userprofile"); // Navigate to the user profile page
    } catch (error) {
      console.log(error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-200 to-fuchsia-400 animate-gradient">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          <h2>Don't have an account?</h2>
          <Link to={"/signup"} className="text-blue-500 hover:underline">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

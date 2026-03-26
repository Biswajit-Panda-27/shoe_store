import React, { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await axios.get(
          "http://localhost:5000/api/auth/userprofile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        alert("Error fetching user profile. Please login again.");
        handleLogout();
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user, setUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/auth/deleteAccount/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Account deleted successfully.");
      handleLogout();
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Error deleting account. Please try again.");
    }
  };

  if (!user) return <div className="text-center text-gray-500">Loading...</div>;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">User Profile</h2>
      <div className="text-left">
        <p className="text-gray-700 mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-700 mb-4"><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mx-2"
        >
          Logout
        </button>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors mx-2"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

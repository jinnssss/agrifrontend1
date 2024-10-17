import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      setSuccessMessage("Successfully registered! Redirecting to login...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center px-8">
        <a href="/" className="text-sm mb-6">
          {"< Back to home page"}
        </a>
        <h1 className="text-4xl font-bold mb-6">Create an Account</h1>
        <p className="text-gray-500 mb-8">Fill in your details to register!</p>

        {successMessage && (
          <div className="bg-green-500 text-white p-3 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none"
          />

          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="mail@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none"
          />

          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-bold"
          >
            Register
          </button>
        </form>

        <p className="text-sm mt-6 text-center">
          Already have an account?{" "}
          <a href="/" className="text-blue-500">
            Login now
          </a>
        </p>
      </div>

      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
    </div>
  );
};

export default Register;

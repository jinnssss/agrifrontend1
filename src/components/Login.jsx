import React, { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log("Login response:", response);
      const token = response.data.token;
      Cookies.set("authToken", token, { expires: 1 });
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
    }
  };

  const handleGoogleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center px-8">
        <a href="/" className="text-sm mb-12">
          {"< Back to home page"}
        </a>
        <div className="flex flex-col justify-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          <p className="text-gray-500 mb-8">
            Enter your email and password to sign in!
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="mb-4 w-full bg-gray-100 py-3 rounded text-center"
        >
          login with Google
        </button>

        <div className="flex justify-center items-center mb-6">
          <span className="border-t w-1/3"></span>
          <span className="mx-4 text-gray-400">or</span>
          <span className="border-t w-1/3"></span>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@domain.com"
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none"
            required
          />

          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none"
            required
          />

          <div className="flex justify-end items-center mb-6">
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-bold"
          >
            Login
          </button>

          <p className="text-sm mt-6 text-center">
            Not registered yet?{" "}
            <a href="/register" className="text-blue-500">
              Create an Account
            </a>
          </p>
        </form>
      </div>

      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
    </div>
  );
};

export default Login;

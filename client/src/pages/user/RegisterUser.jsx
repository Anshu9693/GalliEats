import React from "react";
import AuthLayout from "../../components/AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const RegisterUser = () => {
  const navigate = useNavigate();

  console.log(import.meta.env.VITE_BASE_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const base = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(
        `${base}/api/user/register`,
        {
          fullName,
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("register response", response.data);
      navigate("/user/home");

      alert("Registered successfully");
    } catch (err) {
      console.error("Registration error:", err);
      const msg =
        err?.response?.data?.message || err.message || "Registration failed";
      alert(msg);
    }
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700">Full name</label>
        <input
          name="fullName"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Confirm</label>
          <input
            name="confirmPassword"
            type="password"
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            placeholder="Confirm password"
          />
        </div>
      </div>

      <button className="w-full mt-2 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow">
        Create account
      </button>
    </form>
  );

  return (
    <AuthLayout
      title="Join GalliEats"
      subtitle="Sign up to find food from nearby favorites."
    >
      {form}
      <div className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/user/login" className="text-red-600 font-semibold">
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterUser;

import React from "react";
import AuthLayout from "../../components/AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const base = import.meta.env.VITE_BASE_URL;

    const response = await axios.post(`${base}/api/user/login`, {
      email,
      password,
    });

    navigate("/user/home");
    console.log(response.data);
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="Your password"
        />
      </div>

      <button className="w-full mt-2 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow">
        Log in
      </button>
    </form>
  );

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to continue ordering">
      {form}
      <div className="mt-4 text-sm text-gray-600">
        New to GalliEats?{" "}
        <Link to="/user/register" className="text-red-600 font-semibold">
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginUser;

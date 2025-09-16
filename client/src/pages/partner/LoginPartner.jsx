import React from "react";
import AuthLayout from "../../components/AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPartner = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const base = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(
        `${base}/api/foodPatner/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/partner/home");
    } catch (err) {
      console.error("Error logging in partner:", err);
    }
  };

  const form = (
    <form onSubmit={submitHandler} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="business@example.com"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="Your password"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-700 gap-2">
          <input type="checkbox" className="h-4 w-4" /> Remember me
        </label>
        <Link to="/partner/forgot" className="text-sm text-red-600 font-medium">
          Forgot?
        </Link>
      </div>

      <button className="w-full mt-2 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-lg shadow">
        Sign in
      </button>
    </form>
  );

  return (
    <AuthLayout
      title="Partner sign in"
      subtitle="Access your restaurant dashboard and orders"
    >
      {form}
      <div className="mt-4 text-sm text-gray-600">
        New partner?{" "}
        <Link to="/partner/register" className="text-red-600 font-semibold">
          Create account
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPartner;

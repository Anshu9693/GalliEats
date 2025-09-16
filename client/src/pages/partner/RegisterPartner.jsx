import React from "react";
import AuthLayout from "../../components/AuthLayout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPartner = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;

    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

    try {
      const base = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(
        `${base}/api/foodPatner/register`,
        {
          fullName,
          email,
          phone,
          address,
          password,
        },
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/partner/home");
    } catch (err) {
      console.error("Error registering partner:", err);
    }
  };

  const form = (
    <form onSubmit={submitHandler} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">Full Name</label>
          <input
            name="fullName"
            className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
            placeholder="Enter your name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="business@example.com"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Phone</label>
        <input
          name="phone"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="+91 9876543210"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Address</label>
        <input
          name="address"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="Enter your address"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          placeholder="Create a password"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full mt-2 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-lg shadow"
      >
        Register Restaurant
      </button>
    </form>
  );

  return (
    <AuthLayout
      title="Partner with GalliEats"
      subtitle="Register your restaurant and start receiving orders"
    >
      {form}
      <div className="mt-4 text-sm text-gray-600">
        Already partnered?{" "}
        <Link to="/partner/login" className="text-red-600 font-semibold">
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterPartner;

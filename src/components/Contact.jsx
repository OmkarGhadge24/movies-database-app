import React, { useState } from "react";
import Sidenav from "../templates/Sidenav";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  document.title = "MDB | Contact Us";
  const navigate = useNavigate();

  const initialFormState = {
    name: "",
    age: "",
    email: "",
    gender: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData(initialFormState);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Sidenav />
      <div className="w-[80%] h-full px-8 py-4 text-white">
        <Link
          className="text-white text-3xl font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4 text-2xl"></i>
          Contact Us
        </Link>

        <div className="mt-4">
          <p className="text-md mb-4">
            If you have any questions, feel free to contact us using the form
            below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 text-white border border-zinc-700 focus:ring-0 focus:outline-none focus:border-[#6556CD] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 text-white border border-zinc-700 focus:ring-0 focus:outline-none focus:border-[#6556CD] transition-all"
                required
              />
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <label className="block text-lg mb-2">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 text-white border border-zinc-700 focus:ring-0 focus:outline-none focus:border-[#6556CD] transition-all"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block text-lg mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 text-white border border-zinc-700 focus:ring-0 focus:outline-none focus:border-[#6556CD] transition-all"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 text-white border border-zinc-700 focus:ring-0 focus:outline-none focus:border-[#6556CD] transition-all"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#6556CD] hover:bg-[#4c3fa3] text-white px-4 py-2 rounded-md transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

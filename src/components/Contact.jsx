import React from "react";
import Sidenav from "../templates/Sidenav";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Sidenav />
      <div className="w-[80%] h-full px-8 py-4">
      <Link
          className="text-white text-3xl font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4 text-2xl"></i>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Contact;

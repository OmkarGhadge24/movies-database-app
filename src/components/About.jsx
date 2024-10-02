import React from "react";
import Sidenav from "../templates/Sidenav";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  document.title = "MDB | About";
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Sidenav />
      <div className="w-[80%] h-full px-8 py-4 text-white">
        <Link
          className="text-white text-3xl font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4 text-2xl"></i>
          About
        </Link>

        <div className="mt-10 w-[80%]">
          <h2 className="text-4xl font-bold mb-4">About Our Movie's Database</h2>
          <p className="text-lg mb-4">
            Welcome to MDB! We are your go-to platform for finding information
            about the latest and greatest movies and TV shows. We provide
            trending lists, detailed information about cast and crew, and offer
            a wide variety of genres to explore.
          </p>
          <p className="text-lg mb-4">
            Our mission is to make it easier for entertainment enthusiasts to
            discover new titles, follow their favorite shows, and keep up with
            the ever-evolving world of movies and TV. Stay tuned for updates,
            reviews, and exclusive insights!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

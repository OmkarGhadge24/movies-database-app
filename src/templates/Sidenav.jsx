import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
      <h1 className="text-3xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-line mr-2"></i>
        <span>Movie's Database</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 gap-2">
        <h1 className="text-white font-semibold text-xl mt-4 mb-2">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-1 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-heart-fill"></i>
          Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-movie-fill"></i>
          Tv Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="h-[1px] border-none bg-zinc-400 mt-2" />
      <nav className="flex flex-col text-zinc-400 gap-2">
        <h1 className="text-white font-semibold text-xl mt-4 mb-2">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-information-2-fill"></i>
          About
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md py-3 px-4">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

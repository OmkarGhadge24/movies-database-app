import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      className="w-full h-[55vh] flex flex-col justify-end items-start p-[4%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="w-[70%] text-3xl text-white font-bold">
        {data.title || data.name || data.original_title || data.original_name}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-3">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-500"
        >
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-calendar-fill"></i>{" "}
        {data.release_date || data.first_air_date || "No Information"}
        <i className="text-yellow-500 ml-4 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] px-4 py-3 text-white rounded mt-2 hover:bg-[#3B3080] font-medium">
        {" "}
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;

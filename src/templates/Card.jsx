import React from "react";
import { Link } from "react-router-dom";
import noImage from "/no-img.jpg";

const Card = ({ data, title }) => {
  return (
    <div className="w-full h-full flex flex-wrap bg-[#1F1E24] px-[4%]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[25vh] mr-[3%] mb-[3%]"
        >
          <img
            className="h-[35vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src={
              c.backdrop_path || c.poster_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.poster_path || c.profile_path
                  }`
                : noImage
            }
            alt=""
          />
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] text-white font-semibold text-lg h-[40px] w-[40px] rounded-full bg-yellow-600 flex items-center justify-center group">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
              <div className="absolute opacity-0 group-hover:opacity-100 text-xs text-white bg-black p-1 rounded-md -translate-y-10">
                Rating
              </div>
            </div>
          )}
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.title || c.name || c.original_title || c.original_name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Card;

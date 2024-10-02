import React from "react";
import { Link } from "react-router-dom";
import noImage from "/no-img.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden px-4 mb-3">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            target="_blank"
            className="min-w-[15%] max-h-[45vh] mr-4 bg-zinc-600 rounded-sm backdrop-blur-md bg-opacity-20 overflow-hidden p-1 mb-3"
          >
            <img
              className="object-cover h-[45%] w-full rounded-tr-sm rounded-tl-sm"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : noImage
              }
              alt={d.title}
            />
            <div className="text-white h-[55%]">
              <h1 className="text-lg font-semibold">
                {d.title || d.name || d.original_title || d.original_name}
              </h1>
              <p className="text-zinc-400 text-sm">
                {d.overview.slice(0, 50)}...
                <span className="text-blue-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-center text-white font-bold text-3xl">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;

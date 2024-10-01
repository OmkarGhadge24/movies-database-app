import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/no-img.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex items-center mx-auto">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="search anything"
        className="w-[50%] mx-10 p-3 text-xl outline-none border-none bg-transparent text-zinc-200"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-2xl cursor-pointer text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="w-[50%] z-10 max-h-[50vh] bg-zinc-300 absolute top-[95%] overflow-auto rounded left-[7%]">
        {searches &&
          searches.map((s, i) => (
            <Link
            to={`/${s.media_type}/details/${s.id}`}
              className="hover:text-black hover:bg-zinc-500 text-zinc-600 font-semibold p-6 w-[100%] flex justify-start items-center border-b-2 border-zinc-200"
              key={i}
            >
              <img
                className="w-[9vh] h-[12vh] object-cover rounded mr-4 shadow-md"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noImage
                }
                alt=""
              />
              <span>
                {s.original_title || s.name || s.original_name || s.title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;

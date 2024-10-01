import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../components/NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] z-50 w-screen h-screen top-0 left-0 flex items-center justify-center">
      <Link onClick={() => navigate(-1)}>
        <i className="absolute text-white hover:text-[#6556CD] ri-close-fill font-bold mr-4 text-4xl right-[5%] top-[5%]"></i>
      </Link>
      {ytVideo ? (
        <ReactPlayer
          height={500}
          width={900}
          url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;

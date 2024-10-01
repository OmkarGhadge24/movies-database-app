import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removeMovie } from "../store/actions/movieActions";
import { IoMdHome } from "react-icons/io";
import { FaWikipediaW } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import Loader from "./Loader";
import HorizontalCards from "../templates/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  console.log(info)
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.poster_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-[150vh] px-[6%]"
    >
      {/* Part 1 */}
      <nav className="w-full text-white flex gap-10 text-2xl h-[8vh] items-center">
        <Link onClick={() => navigate(-1)}>
          <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4"></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <IoMdHome />
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <FaWikipediaW />
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          <FaImdb />
        </a>
      </nav>

      {/* Part 2 */}
      <div className="w-full flex h-[50vh]">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[6%] text-white">
          <h1 className="text-4xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex  items-center gap-x-3">
            <span className="h-[40px] w-[40px] rounded-full bg-yellow-600 flex items-center justify-center text-white font-semibold text-lg">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-2  mt-4">Overview</h1>
          <p className="text-base">{info.detail.overview}</p>

          <h1 className="text-2xl mb-2  mt-4">Movie Translated</h1>
          <p className="mb-10 text-base">{info.translations.join(", ")}</p>

          <Link
            className="bg-[#6556CD] px-5 py-4 text-white rounded mt-2 hover:bg-[#3B3080] font-medium"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill mr-2"></i>
            <span>Play Trailer</span>
          </Link>
        </div>
      </div>

      {/* Part 3 */}
      <div className="w-[25%] flex flex-col gap-y-4 mt-10 h-[30vh]">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex flex-col items-start text-white">
            <h1>Available on Platfotms</h1>
            <div className="flex gap-5">
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex flex-col items-start text-white">
            <h1>Available on Rent</h1>
            <div className="flex gap-5">
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex flex-col items-start text-white">
            <h1>Available to Buy</h1>
            <div className="flex gap-5">
              {info.watchproviders.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Part 4*/}
      <div className="flex gap-4">
        <div className="w-[24%] mt-6 mb-4 text-white p-4 bg-zinc-600 rounded-lg backdrop-blur-md bg-opacity-20">
          <h1 className="text-2xl font-semibold mb-4">Posters</h1>
          <div className="grid grid-cols-2 gap-3">
            {info.images?.slice(0, 6).map((poster, index) => (
              <img
                key={index}
                className="object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                alt={`Poster ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-[76%]">
          <hr className="mt-6 mb-4 border-none h-[2px] bg-zinc-500" />
          <h1 className="text-3xl font-bold text-white mb-2 ml-4">Recommendations</h1>
          <HorizontalCards
            data={
              info.recommendations.length > 0
                ? info.recommendations
                : info.similar
            }
          />
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;

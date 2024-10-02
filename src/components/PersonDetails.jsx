import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadPerson, removePerson } from "../store/actions/personActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "../templates/HorizontalCards";
import Loader from "./Loader";
import DropDown from "../templates/DropDown";
import { FiDisc } from "react-icons/fi";
import { FaWikipediaW } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const PersonDetails = () => {
  document.title = "SCSDB | Person Details";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  // console.log(info);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return info ? (
    <div className="px-[6%] w-screen h-[180vh] bg-[#1F1E24] ">
      {/* Part 1*/}
      <nav className="h-[8vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* Part 2*/}
        <div className="w-[25%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-[90%] object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="my-4 border-none h-[2px] bg-zinc-500" />
          {/* Social Media Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <FaWikipediaW />
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <FaFacebookSquare />
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <FaInstagramSquare />
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <FaSquareXTwitter />
            </a>
          </div>

          {/* Personal Information */}
          <h1 className="text-2xl text-zinc-300 font-semibold my-4">
            Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

          {info.detail.deathday ? (
            <>
              <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
                Deathday
              </h1>
              <h1 className=" text-zinc-400 ">
                {info.detail.deathday ? info.detail.deathday : "Still Alive"}
              </h1>
            </>
          ) : null}

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Place Of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Part 3*/}
        <div className="w-[75%] ml-[3%]">
          <h1 className="text-4xl text-white font-black my-4">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-300 font-semibold ">Biography</h1>
          <div className="h-[35vh] overflow-x-hidden overflow-y-auto p-1">
            <p className="text-zinc-400 mt-2 text-base">
              {info.detail.biography}
            </p>
          </div>

          <h1 className="mt-5 text-xl text-zinc-300 font-semibold mb-2">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between items-center">
            <h1 className="mt-2 text-xl text-zinc-300 font-semibold ">
              Acting
            </h1>

            <DropDown
              title="Category"
              option={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="text-zinc-400 w-full h-[45vh] mt-4 overflow-x-hidden overflow-y-auto border-2 border-zinc-700 p-4 mb-4">
            {info[category + "Credits"].cast.map((c, i) => (
              <div
                key={i}
                className="hover:text-white p-4 rounded hover:bg-[#19191d] duration-300 cursor-pointer"
              >
                <Link
                  to={`/${category}/details/${c.id}`}
                  className="flex flex-col"
                >
                  <div className="flex items-center">
                    <FiDisc className="inline-block mr-2" />
                    <p className="inline-block">
                      {c.name || c.title || c.original_name || c.original_title}
                    </p>
                  </div>

                  <span className="block ml-7 mt-[5px]">
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;

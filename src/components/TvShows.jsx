import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../templates/Topnav";
import DropDown from "../templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";
import Loader from "./Loader";
import axios from "../utils/axios";

const TvShows = () => {
  document.title = "MDB | TV Shows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage(page + 1);
        setTv((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      setTv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[3%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <Link onClick={() => navigate(-1)}>
            {" "}
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4"></i>
          </Link>
          TV Shows
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <DropDown
            title="Category"
            option={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Card data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default TvShows;

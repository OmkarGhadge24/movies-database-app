import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "../templates/DropDown";
import Topnav from "../templates/Topnav";
import axios from "../utils/axios";
import Card from "../templates/Card";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MDB | Trending";

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setpage(page + 1);
        setTrending((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[3%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <Link onClick={() => navigate(-1)}>
            {" "}
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4"></i>
          </Link>
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <DropDown
            title="Category"
            option={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]" />
          <DropDown
            title="Duration"
            option={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;

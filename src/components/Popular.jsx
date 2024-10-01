import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loader from "./Loader";
import Topnav from "../templates/Topnav";
import DropDown from "../templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MDB | Popular";

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setpage(page + 1);
        setPopular((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[3%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <Link onClick={() => navigate(-1)}>
            {" "}
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4"></i>
          </Link>
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <DropDown
            title="Category"
            option={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;

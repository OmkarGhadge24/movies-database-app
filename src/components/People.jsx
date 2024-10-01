import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../templates/Topnav";
import DropDown from "../templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";
import Loader from "./Loader";
import axios from "../utils/axios";

const People = () => {
  document.title = "MDB | People";
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage(page + 1);
        setPerson((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setPerson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[3%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <Link onClick={() => navigate(-1)}>
            {" "}
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-4"></i>
          </Link>
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Card data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People;

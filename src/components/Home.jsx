import React, { useEffect, useState } from "react";
import Sidenav from "../templates/Sidenav";
import Topnav from "../templates/Topnav";
import axios from "../utils/axios";
import Header from "../templates/Header";
import HorizontalCards from "../templates/HorizontalCards";
import DropDown from "../templates/DropDown";
import Loader from "./Loader";

const Home = () => {
  document.title = "MDB | Home Page";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(
        `/trending/all/day`
      );
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.error(error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/day`
      );
      setTrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-semibold text-white">Trending</h1>
          <DropDown title="Filter" option={["tv", "movie", "all"]} func={(e)=> setCategory(e.target.value)} />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;

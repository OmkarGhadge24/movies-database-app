import React from "react";
import loading from "/loading.gif";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={loading} alt="" />
    </div>
  );
};

export default Loader;

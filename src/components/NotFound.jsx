import React from "react";
import notpage from "/notpage.gif";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={notpage} alt="" />
    </div>
  );
};

export default NotFound;

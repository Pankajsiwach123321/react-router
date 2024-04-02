import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen bg-red-500 w-full">
      <div className=" max-w-[1140px] px-3 mx-auto">
        <h1 className=" text-5xl text-orange-800">Home</h1>
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-green-300"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-green-400"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Contact = () => {
  return (
    <div className=" min-h-screen bg-red-600 w-full">
      <div className=" max-w-[1140px] px-3 mx-auto">
        <h1 className=" text-5xl text-orange-800">Contact</h1>
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-slate-400"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-slate-500"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full my-2 px-3 h-[500px] bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

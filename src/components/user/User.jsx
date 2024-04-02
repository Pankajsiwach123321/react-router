import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className=" min-h-screen bg-red-500 w-full">
      <h1>User:{id}</h1>
    </div>
  );
};

export default User;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  // before user render api fecth the data
  const data = useLoaderData();
  //   const [data, setdata] = useState();
  //   console.log(data);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Pankajsiwach123321")
  //       .then((res) => res.json())
  //       .then((data) => setdata(data));
  //   }, []);

  return (
    <div className=" min-h-screen bg-red-700 w-full">
      <div className=" max-w-[1140px] px-3 mx-auto">
        <h1>Github{data?.login}</h1>
        <p>github follwers: {data?.followers}</p>
        <p>github repo: {data?.public_repos}</p>
        <div>
          <img src={data?.avatar_url} alt="hh" width={100} />
        </div>
      </div>
    </div>
  );
};

export default Github;
export const githubInfoLoder = async () => {
  const responsce = await fetch(
    "https://api.github.com/users/Pankajsiwach123321"
  );
  console.log(responsce.json);
  return responsce.json();
};

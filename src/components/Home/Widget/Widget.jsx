import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Widget() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
        setUsername("");
      });
  };

  return (
    <div className="p-[20px_50px] flex-[0.33]">
      <div className="flex mb-6 justify-center items-center">
        <Avatar src={data.avatar_url} sx={{ height: "70px", width: "70px" }} />
        <h3 className="text-lg font-medium p-[30px_10px] ml-2">
          Hello, {data.name || "User"}
        </h3>
      </div>
      <form>
        <div className="flex w-full items-center space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter your github username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-col bg-white rounded-xl w-full  mt-10 shadow-[0_5px_-7px_rgba(0,0,0.75)] ">
        {data.message === "Not Found" || data.length == 0 ? (
          <div className="flex items-center justify-center text-gray-600">
            <h3>Sorry,No user found </h3>
          </div>
        ) : (
          <div className="flex justify-center text-gray-600 flex-col">
            <h3 className="flex items-center justify-center p-[10px_2px]">
              {data.login.toUpperCase()}
            </h3>
            <div className="flex justify-evenly border-solid border-t-[1px] p-[20px_2px]  border-gray-300 ">
              <div className="flex justify-center items-center flex-col">
                <h5>{data.followers}</h5>
                <p>{"followers"}</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h5>{data.following}</h5>
                <p>{"following"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Widget;

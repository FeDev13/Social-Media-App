import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { allUsersRoute } from "../../utils/APIRoutes";
import { Emoji } from "emoji-picker-react";

export function Search() {
  const url = `http://localhost:5050/users`;
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    async function productosDB() {
      const data = await axios.get(allUsersRoute);
      setUsers(data.data);
    }
    console.log(users);
    productosDB();
  }, []);

  console.log(users);
  let { buscar } = useParams();
  console.log(buscar);

  return (
    <>
      <Navbar />
      <div className="mt-28 ml-4 flex  w-full gap-3 rounded-lg p-2 ">
        {users.map((Element, index) => {
          if (
            Element.username.trim().toLowerCase().includes(buscar.toLowerCase())
          ) {
            return (
              <a className="w-[15%]" href={"/Profile/" + Element._id}>
                <div className="w-full gap-3 rounded-lg border bg-white p-2 dark:border-black dark:bg-[#16181C]  dark:text-white">
                  <div className="border-search flex flex-col justify-center gap-2 rounded-lg p-2">
                    <div className="relative flex justify-center">
                      <img
                        src={`data:image/svg+xml;base64,${Element.avatarImage}`}
                        className="relative h-[10%] w-[70%] rounded-lg"
                        alt=""
                      />
                      <img
                        src={Element.profilePicture}
                        className="absolute bottom-0 w-[20%] rounded-lg "
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-lg font-bold">
                      {Element.username}
                    </h1>
                    <h3 className="text-center text-xs font-bold">
                      @{Element.username}
                    </h3>
                    <div className="my-3 flex w-[100%]">
                      <div className="flex w-[33%] flex-col items-center">
                        <h1 className="text-lg font-bold">0</h1>
                        <h3 className="text-xs font-extralight opacity-60">
                          Post
                        </h3>
                      </div>
                      <div className="flex w-[33%] flex-col items-center">
                        <h1 className="text-lg font-bold">
                          {Element.following.length}
                        </h1>
                        <h3 className="text-xs font-extralight opacity-60">
                          Followers
                        </h3>
                      </div>
                      <div className="flex w-[33%] flex-col items-center">
                        <h1 className="text-lg font-bold">
                          {Element.followers.length}
                        </h1>
                        <h3 className="text-xs font-extralight opacity-60">
                          Following
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          }
        })}
      </div>
    </>
  );
}

{
  /* <h1 className=""></h1>
              <img src={Element.profilePicture} alt="" />
              <h4> {Element.email}</h4> */
}

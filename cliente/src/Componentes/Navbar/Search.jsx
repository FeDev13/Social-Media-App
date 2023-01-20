import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export function Search() {
  const url = "http://localhost:5050/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const user = await axios.get(url);
      setUsers(user.data);
    }
    productosDB();
  }, []);
  let { buscar } = useParams();

  console.log(buscar);
  return (
    <>
      <Navbar />

      {users.map((Element, index) => {
        if (
          Element.username.trim().toLowerCase().includes(buscar.toLowerCase())
        ) {
          return (
            <div className="mt-28 ml-4  flex gap-5 p-2 w-[15%] border rounded-lg ">
               <div className="flex flex-col justify-center">
              <div className="relative flex justify-center">
                <img
                  src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                  className="relative h-[90%] rounded-lg"
                  alt=""
                />
                <img
                  src={Element.profilePicture}
                  className="absolute bottom-0 w-[20%] rounded-lg "
                  alt=""
                />
              </div>
              <h1 className="text-center text-lg font-bold">{Element.fullname}</h1>
              <h3 className="text-center text-xs font-extralight">@{Element.fullname}</h3>
              <div className="my-3 flex w-[100%]">
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">Post</h3>
                </div>
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Followers
                  </h3>
                </div>
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Following
                  </h3>
                </div>
              </div>
            </div>
            </div>
          );
        }
      })}
    </>
  );
}

 {/* <h1 className=""></h1>
              <img src={Element.profilePicture} alt="" />
              <h4> {Element.email}</h4> */}
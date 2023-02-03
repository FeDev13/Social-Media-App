import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import UserPost from "../UserPost/UserPost";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export function HomeCenter({ username }) {
  const url = "http://localhost:5050/posts/";
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, [username, user._id]);

  return (
    //trae todos los posts de los users
    <>
      <div className=" max-ms:px-0 flex h-[50%]  w-[65%] flex-col items-center gap-y-8 py-[2%] px-[2%] max-lg:w-[70%] max-md:pl-0 max-sm:w-[95%]">
        <UserPost />

        {data.map((post) => {
          return (
            <>
              <Post key={post.id} post={post} />
            </>
          );
        })}
      </div>
    </>
  );
}

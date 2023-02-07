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
  const [dataUser, setDataUser] = useState([]);
  const [avatarUser, setAvatarUser] = useState([]);

  // useEffect(() => {
  //   const asyncFn = async () => {
  //     const dato = await axios.get(`http://localhost:5050/posts/`);
  //     setDataUser(dato.data[0].user[0].username);
  //     setAvatarUser(dato.data[0].user[0].avatarImage);

  //     console.log(dataUser);
  //   };
  //   asyncFn();
  // }, [dataUser]);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
      );
      console.log(res.data);
    setDataUser(data[0].user[0].username)
  };
  useEffect(() => {
    fetchData();
  }, [dataUser]);

  return (
    //trae todos los posts de los users
    <>
      <div className=" max-ms:px-0 flex h-[50%]  w-[65%] flex-col gap-y-8 py-[2%] px-[2%] max-lg:w-[70%] max-md:pl-0 max-sm:w-[95%] items-center">
        <UserPost />

        {data.map((post) => {
          return (
            <>
            <h1>{post.user[0].username}</h1>
              <Post key={post.id} id={post.user[0]._id} post={post} />
            </>
          );
        })}
      </div>
    </>
  );
}

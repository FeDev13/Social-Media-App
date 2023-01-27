import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Card from "../Profile/Card";

export function HomeCenter() {
  const url = "http://localhost:5050/posts";
  const [data, setData] = useState([]);

  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    //trae todos los posts de los users
    <>
      {data.map((post) => {
        return (
          <>
            <Post post={post} />
          </>
        );
      })}
    </>
  );
}

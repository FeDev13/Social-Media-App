import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Card from "../Profile/Card"

export function HomeCenter({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
         await axios.get("http://localhost:5050/posts/:username") //ruta de los posteos
        
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username]);

  return (
    //trae todos los posts de los users
    <>
      {(!username || username === user.username) && <Card />}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </>
    
  );
}

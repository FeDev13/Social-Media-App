import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length); //cuenta los likes
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [commentwriting, setcommentwriting] = useState("");
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  //funcion de likes
  const likeHandler = () => {
    try {
      axios.put("http://localhost:5050/posts/" + post._id + "/like", {
        userId: currentUser._id,
      }); //ruta del like
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  //funcion de comentarios
  const addComment = async () => {
    const comment = {
      postid: `${post._id}`,
      username: `${user.username}`,
      comment: `${commentwriting}`,
    };
    try {
      axios.put("http://localhost:5050/posts/" + post._id + "/comment", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setComments(comments.concat(comment));
  };

  const handleComment = () => {
    addComment();
  };

  return (
    <div className="max-ms:px-0 flex h-[50%]  w-[65%] flex-col gap-y-8 py-[2%] px-[2%] max-lg:w-[70%] max-md:pl-0 max-sm:w-[95%]">
      <div className=" flex w-[100%] flex-col  rounded-lg bg-white p-[2%] shadow-lg dark:bg-[#16181C] dark:text-white max-lg:p-0">
        <div className="flex h-16 w-full p-2">
          <div className="relative  flex w-full cursor-pointer items-center gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className="h-12 w-12 rounded-lg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-0 right-0 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div className="flex flex-col ">
              <h2>{user.username}</h2>
              <div className="flex gap-4">
                <h4 className="text-xs text-blue-800">Ubicacion</h4>
                <h4 className="text-xs font-extralight opacity-70">
                  2 hours ago
                </h4>
              </div>
            </div>
          </div>
        </div>
        <p className="px-[2%] py-[1%] text-lg font-light max-lg:text-base">
          {post.desc}
        </p>
        <div className="flex w-full items-center gap-6 border-t-2 p-[2%]  ">
          <div className="flex items-center gap-2">
            <svg
              onClick={likeHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="h-6 w-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h4 className="text-xs font-extralight">{like}</h4>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <h4 className="text-xs font-extralight">{comments.length}</h4>
          </div>
        </div>
        <div className="relative flex w-[100%] gap-5 p-[2%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            className="w-full rounded-lg bg-gray-100 p-2 pl-8 pr-16 text-sm outline-none"
            placeholder="Escribi tu comentario"
            onChange={(e) => setcommentwriting(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute top-7 right-8 h-4 w-4 cursor-pointer opacity-70"
            onClick={handleComment}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
        {comments.map((item) => (
          <div className="relative flex w-[100%] gap-5 p-[2%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className=" mt-1 items-start">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

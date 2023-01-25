import React from "react";
import { useState, useEffect } from "react";
const HomeCenter = () => {


  return (
    <div className="w-[65%] py-[2%] px-[2%]  max-ms:px-0 flex-col gap-y-8 max-md:pl-0 max-lg:w-[70%] flex max-sm:w-[95%] h-[50%]">
      <div className=" w-[100%] p-[2%] max-lg:p-0  flex rounded-lg shadow-lg dark:text-white bg-white dark:bg-[#16181C] flex-col">
        <div className="flex h-16 w-full p-2">
          <div className="flex  w-full items-center gap-4 relative  ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className="w-12 h-12 rounded-lg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-0 right-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div className="flex flex-col ">
              <h2>Username</h2>
              <div className="flex gap-4">
                <h4 className="text-xs text-blue-800">Ubicacion</h4>
                <h4 className="text-xs font-extralight opacity-70">
                  3 hours ago
                </h4>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg px-[2%] py-[1%] font-light max-lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
          eos beatae corrupti id, temporibus exercitationem, molestias minima
          sit laborum enim quaerat aut error earum vero reiciendis debitis
          incidunt quos? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptatem consequuntur tenetur nisi laborum libero voluptate
          ipsum, nam enim, quam cum rerum, sequi t? Quo nemo nulla repudiandae
          aspernatur molestias praesentium.
        </p>
        <div className="flex items-center gap-6 w-full p-[2%] border-t-2  ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
             
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h4 className="text-xs font-extralight">120</h4>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <h4 className="text-xs font-extralight">12 Comments</h4>
          </div>
        </div>
        <div className="relative p-[2%] gap-5 flex w-[100%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            className="w-full text-sm pl-8 pr-16 p-2 rounded-lg outline-none bg-gray-100"
            placeholder="Write your comment"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="top-7 right-8 absolute w-4 h-4 opacity-70"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
      <div className=" w-[100%] p-[2%] max-lg:p-0  flex rounded-lg shadow-lg dark:text-white dark:bg-[#16181C] bg-white flex-col">
        <div className="flex h-16 w-full p-2">
          <div className="flex  w-full items-center gap-4 relative  ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className="w-12 h-12 rounded-lg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-0 right-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div className="flex flex-col ">
              <h2>Username</h2>
              <div className="flex gap-4">
                <h4 className="text-xs text-blue-800">Ubicacion</h4>
                <h4 className="text-xs font-extralight opacity-70">
                  3 hours ago
                </h4>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg px-[2%] py-[1%] font-light max-lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
          eos beatae corrupti id, temporibus exercitationem, molestias minima
          sit laborum enim quaerat aut error earum vero reiciendis debitis
          incidunt quos? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptatem consequuntur tenetur nisi laborum libero voluptate
          ipsum, nam enim, quam cum rerum, sequi t? Quo nemo nulla repudiandae
          aspernatur molestias praesentium.
        </p>
        <div className="flex items-center gap-6 w-full p-[2%] border-t-2  ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
             
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h4 className="text-xs font-extralight">400</h4>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <h4 className="text-xs font-extralight">24 Comments</h4>
          </div>
        </div>
        <div className="relative p-[2%] gap-5 flex w-[100%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            className="w-full text-sm pl-8 pr-16 p-2 rounded-lg outline-none bg-gray-100"
            placeholder="Write your comment"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="top-7 right-8 absolute w-4 h-4 opacity-70"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeCenter;

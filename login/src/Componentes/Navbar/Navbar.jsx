import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";

const Navbar = () => {
  const [searchState, setSearchState] = useState(false);
  const [hamState, setHamState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="fixed top-0 z-10 flex w-[100%] items-center justify-between bg-black  p-6 max-lg:px-6 ">
      <div className="flex">
        <div className="flex items-center max-sm:hidden">
          <h1 className="pl-8 text-3xl uppercase text-white max-xl:text-2xl max-lg:p-0 max-lg:text-xl">
            Social media app
          </h1>
        </div>
        {/* <div
          className="grid h-11 w-11 place-content-center rounded-full bg-white lg:hidden lg:w-6"
          onClick={() => {
            hamState && setHamState(false);
            menuState && setMenuState(false);
            setSearchState(!searchState);
          }}
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
          </svg>
        </div> */}

        {/* <div className="hover:bg-gray-3 grid h-11 w-11 cursor-pointer place-content-center rounded-3xl lg:hidden">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
          onClick={() => {
            menuState && setMenuState(false);
            searchState && setSearchState(false);
            setHamState(!hamState);
          }}
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          </svg>
        </div> */}
      </div>
      <div className=" flex items-center justify-center gap-8 lg:w-[50%]">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
        <NavSearch />
      </div>
      {/* <div
        className={`absolute top-16 rounded-lg pb-2 duration-500 lg:hidden ${
          hamState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-3 w-60`}
      ></div> */}
      {/* <div
        className={`border-gray-2 absolute top-16 rounded-lg border-2 border-solid px-3 py-5 duration-500 lg:hidden ${
          searchState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-4 w-auto`}
      >
        
        <NavSearch />
        <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        </div>
      </div>
      <div className="hidden lg:flex"></div>
      <div className="hidden lg:block">
      
      </div> */}

      <div className="flex gap-8 rounded-3xl pr-16 max-lg:p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <Link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
        {/* <div
          className={`absolute top-16 duration-500  ${
            menuState ? "w-full md:w-2/3 lg:w-2/4" : "h-0 w-0"
          } right-0 overflow-hidden rounded-lg lg:right-3`}
        >
       
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

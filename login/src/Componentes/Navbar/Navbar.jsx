import React from "react";
import { useState } from "react";
import NavSearch from "./NavSearch";
import Logo from "../../assets/logo.png";

import { Menu } from "./Menu";

const Navbar = () => {
  const [searchState, setSearchState] = useState(false);
  const [hamState, setHamState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between bg-white px-2 lg:px-5">
      <div className="flex gap-2 lg:gap-3">
        <div className="  mx-8 w-1/3">
          <img src={Logo} alt="" />
        </div>
        <div
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
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div className="hover:bg-gray-3 grid h-11 w-11 cursor-pointer place-content-center rounded-3xl lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
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
        </div>
      </div>
      <div
        className={`absolute top-16 rounded-lg pb-2 duration-500 lg:hidden ${
          hamState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-3 w-60`}
      ></div>
      <div
        className={`border-gray-2 absolute top-16 rounded-lg border-2 border-solid px-3 py-5 duration-500 lg:hidden ${
          searchState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-4 w-auto`}
      >
        <NavSearch />
      </div>
      <div className="hidden lg:flex"></div>
      <div className="hidden lg:block">
        <NavSearch />
      </div>
      <div className="flex gap-8 rounded-3xl bg-teal-500 p-1">
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
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        
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
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div
          className={`absolute top-16 duration-500  ${
            menuState ? "w-full md:w-2/3 lg:w-2/4" : "h-0 w-0"
          } right-0 overflow-hidden rounded-lg lg:right-3`}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

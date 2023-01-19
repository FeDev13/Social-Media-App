import React from "react";
import { useState } from "react";
import search from "../icons/search.svg";
import hamburger from "../icons/icons8-hamburger-menu-32.png";
import NavSearch from "./NavSearch";
import home from "../icons/icons8-home-48.png";
import groups from "../icons/icons8-friends-48.png";
import { NavExtra } from "./NavExtra";
import Messenger from "../icons/icons8-send-32.png";
import Notififaction from "../icons/icons8-bell-32.png";
import Avatar from "../icons/avatar1png.png";
import Logo from "../icons/logo.png";

import { Menu } from "../Components/Menu";

const Navbar = () => {
  const [searchState, setSearchState] = useState(false);
  const [hamState, setHamState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const navItems = [
    {
      icon: home,
      href: "#",
      tooltip: "Inicio",
    },

    {
      icon: groups,
      href: "#",
      tooltip: "Contactos",
    },
  ];
  return (
    <div className="h-16 flex items-center justify-between px-2 lg:px-5 bg-white">
      <div className="flex gap-2 lg:gap-3">
        <div className="  mx-8 w-1/3">
          <img src={Logo} alt="" />
        </div>
        <div
          className="grid place-content-center bg-white w-11 h-11 lg:w-6 rounded-full lg:hidden"
          onClick={() => {
            hamState && setHamState(false);
            menuState && setMenuState(false);
            setSearchState(!searchState);
          }}
        >
          <img src={search} alt="lupa" />
        </div>

        <div className="lg:hidden grid place-content-center w-11 h-11 hover:bg-gray-3 rounded-3xl cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger icon"
            onClick={() => {
              menuState && setMenuState(false);
              searchState && setSearchState(false);
              setHamState(!hamState);
            }}
          />
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-16 rounded-lg pb-2 duration-500 ${
          hamState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-3 w-60`}
      >
        {navItems.map(({ icon, href, tooltip }) => (
          <a
            href={href}
            className="flex justify-start items-center w-full h-16 bg-transparent border-b-2 pl-4 text-gray-1 gap-3 border-gray-2 hover:border-b-4 hover:border-blue-700 duration-500"
          >
            <img src={icon} alt="" />
            <p>{tooltip} </p>
          </a>
        ))}
      </div>
      <div
        className={`lg:hidden absolute top-16 px-3 py-5 rounded-lg border-2 border-solid border-gray-2 duration-500 ${
          searchState ? "left-2 opacity-100" : "-left-96 opacity-0"
        } bg-gray-4 w-auto`}
      >
        <NavSearch />
      </div>
      <div className="hidden lg:flex">
        {navItems.map(({ icon, href }) => (
          <a
            href={href}
            className="w-28 h-16 bg-transparent border-b-4 border-transparent hover:border-b-4 hover:border-blue-700 duration-500 flex justify-center items-center"
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </div>
      <div className="hidden lg:block">
        <NavSearch />
      </div>
      <div className="flex gap-8 rounded-3xl bg-teal-500 p-1">
        <NavExtra imgSrc={Messenger} tooltip="messenger" />
        <NavExtra imgSrc={Notififaction} tooltip="notification" />
        <NavExtra imgSrc={Avatar} tooltip="avatar" />

        <div
          className={`absolute top-16 duration-500  ${
            menuState ? "w-full md:w-2/3 lg:w-2/4" : "w-0 h-0"
          } right-0 lg:right-3 rounded-lg overflow-hidden`}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

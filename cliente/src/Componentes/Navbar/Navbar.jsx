import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import "tw-elements";
import ColorItem from "../Home/color-item";

const Navbar = () => {
  let btn = document.getElementById("btn");
  
  let modal = document.getElementById("modal");
  let nav = document.getElementById("nav");
  let plus = document.getElementById("plus");
  const colors = ["#ff6961", "#2ABA7D", "#fdfd96", "#84b6f4", "#fdcae1"];

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");

    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  });

  const [searchState, setSearchState] = useState(false);
  const [hamState, setHamState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const [theme, setThemes] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handelThemeSwitch = () => {
    setThemes(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const currentColor = localStorage.getItem("theme");
    setThemes(currentColor);
  });

  return (
    <div
      id="nav"
      className="fixed top-0 z-10 flex w-[100%] items-center justify-between bg-black  p-6 max-lg:px-6 "
    >
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

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
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
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        
        </button>

        <div
          class="modal fade z- fixed top-[40%] left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenter"
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
            <div class="modal-content pointer-events-auto relative m-auto flex w-[50%] flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-xl  outline-none dark:bg-[#16181C] dark:text-white max-lg:w-[70%] max-md:w-[90%]">
              <div class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800 dark:text-white"
                  id="exampleModalScrollableLabel"
                >
                  Personaliza tu visualización
                </h5>
                <button
                  type="button"
                  class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <div className="flex flex-wrap gap-6 p-3 max-sm:py-0">
                  <h1>Colors:</h1>
                  {colors.map((color, idx) => (
                    <ColorItem key={idx} setColor={setColor} color={color} />
                  ))}
                </div>
                <div className="flex gap-6 p-3">
                  <h1>Thema:</h1>
                  <a className="link" onClick={handelThemeSwitch}>
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
                        d={ theme === "dark" ? "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" : "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }
                      />
                    </svg>
                   

                  </a>
                </div>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                <button
                  type="button"
                  id="modal"
                  class="inline-block rounded px-6  py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md  transition duration-150 ease-in-out hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  data-bs-dismiss="modal"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>

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
const setTheme = (color) => {
  document.documentElement.style.setProperty("--bg-color", color);
  btn.style.background = ("--bg-color", color);
  modal.style.background = ("--bg-color", color);
  nav.style.background = ("--bg-color", color);
  plus.style.stroke = ("--bg-color", color);
};

export default Navbar;
import React from "react";

const NavSearch = () => {
  return (
    <form className="max-lg:hidden  flex w-  items-center  w-[80%] rounded-lg bg-white p-2">
      <label className="flex ">
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
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent text-black focus:outline-none pl-4 "
        />
      </label>
    </form>
  );
};

export default NavSearch;

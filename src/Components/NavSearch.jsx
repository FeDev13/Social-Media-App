import React from "react";
import search from "../icons/search.svg";

const NavSearch = () => {
  return (
    <form className="flex bg-white items-center justify-center w-auto h-11 rounded-full px-8">
      <label className="flex gap-3">
        <img src={search} alt="lupa" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent text-black focus:outline-none "
        />
      </label>
    </form>
  );
};

export default NavSearch;

import React from "react";

export const NavExtra = ({ imgSrc, tooltip, eventHandler }) => {
  return (
    <div
      onClick={eventHandler}
      className="w-10 h-10 bg-gray-3 flex items-center justify-center rounded-full overflow-hidden"
    >
      <img src={imgSrc} alt="imagen" />
    </div>
  );
};

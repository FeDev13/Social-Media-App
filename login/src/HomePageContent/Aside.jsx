import React from "react";

const Aside = () => {
  return (
    <>
      <div className="w-[15%] py-[2%] justify-center flex">
        <div className="flex flex-col w-full rounded-lg p-3 shadow-lg bg-white">
          <div className="relative w-[100%] ">
            <input
              type="search"
              className="w-[100%] text-sm pl-8 p-2 rounded-lg outline-none bg-gray-100"
              placeholder="Search People"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="top-2 left-2 absolute w-4 h-4 opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className=" text-sm font-light my-3">FOLLOWING</h4>
            <div className="flex justify-between p-2">
              <div className="flex gap-4">
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className=" font-extralight">Nombre Apellido</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;

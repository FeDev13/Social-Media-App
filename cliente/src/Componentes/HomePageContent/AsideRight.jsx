import React from "react";

const AsideRight = () => {
  return (
    <>
      <div className="flex flex-col w-[20%] pt-[2%] gap-y-5">
        <div className="w-[100%] p-[2%] justify-center flex">
          <div className="flex flex-col w-full rounded-lg p-3 shadow-lg bg-white">
            <div className="flex flex-col justify-center">
              <div className="relative flex justify-center">
                <img
                  src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                  className="rounded-lg h-[90%] relative"
                  alt=""
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                  className="absolute bottom-0 w-[20%] rounded-lg "
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-lg">Username</h1>
              <h3 className="text-center font-extralight text-xs">@username</h3>
              <div className="w-[100%] flex my-3">
                <div className="flex flex-col w-[33%] items-center">
                  <h1 className="font-bold text-lg">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">Post</h3>
                </div>
                <div className="flex flex-col w-[33%] items-center">
                  <h1 className="font-bold text-lg">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Followers
                  </h3>
                </div>
                <div className="flex flex-col w-[33%] items-center">
                  <h1 className="font-bold text-lg">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Following
                  </h3>
                </div>
              </div>
            </div>
            <a className="w-[100%] relative">
              <button type="button" className="relative w-[100%] my-3 rounded-lg bg-blue-600 p-2 text-white text-center"> Create Post </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 absolute top-5 left-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-[100%] h-[40%] p-[2%] justify-center flex">
          <div className="flex flex-col w-full rounded-lg p-5 shadow-lg bg-white">
          <div className="w-full">
            <h4 className=" text-sm font-bold opacity-30 my-3 mb-5">RECOMMENDATION</h4>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex flex-col">
                <h3 className="">Nombre Apellido</h3>
                <h4 className="text-xs font-extralight">123 Followers</h4>
                </div>
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
      </div>
    </>
  );
};

export default AsideRight;

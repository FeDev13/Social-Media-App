import React from "react";
import "tw-elements";




const AsideRight = () => {


  return (
    <>
      <div className="flex  w-[15%] flex-col gap-y-5 pt-[1.6%] max-lg:w-[25%] max-sm:hidden">
        <div className="fixed flex w-[15%]  justify-center max-lg:w-[25%]">
          <div className="flex w-full flex-col rounded-lg bg-white p-3 shadow-lg dark:text-white dark:bg-[#16181C] ">
            <div className="flex flex-col justify-center">
              <div className="relative flex justify-center">
                <img
                  src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                  className="relative h-[90%] rounded-lg"
                  alt=""
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                  className="absolute bottom-0 w-[20%] rounded-lg "
                  alt=""
                />
              </div>
              <h1 className="text-center text-lg font-bold">Username</h1>
              <h3 className="text-center text-xs font-extralight">@username</h3>
              <div className="my-3 flex w-[100%]">
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">Post</h3>
                </div>
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Followers
                  </h3>
                </div>
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">100</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Following
                  </h3>
                </div>
              </div>
            </div>
            <a className="relative flex w-[100%] items-center">
              <div className="flex w-full items-center ">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 absolute left-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg> */}

                <button
                  type="button"
                id="btn"
              
                  class="w-full rounded
                
bg-black
      px-6
      py-2.5
      text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md
      transition duration-150
      ease-in-out  hover:shadow-lg 
      focus:shadow-lg focus:outline-none
      focus:ring-0
     
      active:shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Create Post
                </button>
              </div>

              <div
                class="modal fade fixed top-0 left-0 hidden  h-full w-full  overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="flex h-full w-full items-center justify-center bg-slate-500 bg-opacity-40 ">
                  <div class="modal-dialog pointer-events-none relative w-[50%]">
                    <div class="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white dark:bg-[#16181C] bg-clip-padding text-current shadow-lg outline-none">
                      <div class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                        <h5
                          class="text-xl font-medium leading-normal text-gray-800"
                          id="exampleModalLabel"
                        >
                          Create Post
                        </h5>
                        <button
                          type="button"
                          class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body relative p-4">
                        <div className="relative flex w-[100%] gap-5 p-[2%] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-8 w-8 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <input
                            className="w-full rounded-lg bg-gray-100 p-2 pl-8 pr-16 text-sm outline-none"
                            placeholder="What's going on?"
                          />
                        </div>
                      </div>
                     
                      <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                        <button
                          type="button"
                          class="rounded
          bg-purple-600
          px-6
          py-2.5
          text-xs
          font-medium
          uppercase
          leading-tight
          text-white
          shadow-md
          transition duration-150
          ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700
          focus:shadow-lg focus:outline-none
          focus:ring-0
          active:bg-purple-800
          active:shadow-lg"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="ml-1
      rounded
      bg-blue-600
      px-6
      py-2.5
      text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md transition
      duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg
      focus:outline-none
      focus:ring-0
      active:bg-blue-800
      active:shadow-lg"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="w-[100%] h-[45%] p-[2%] justify-center flex">
          <div className="fixed top-50 w-[15%] flex flex-col  rounded-lg p-5 shadow-lg bg-white">
            <div className="w-full">
              <h4 className=" text-sm font-bold opacity-30 my-3 mb-5">
                RECOMMENDATION
              </h4>
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
        </div> */}
      </div>
    </>
  );
};



export default AsideRight;

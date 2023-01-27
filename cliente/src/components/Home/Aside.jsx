import React from "react";
import { useState,useEffect  } from "react";
import { allUsersRoute } from "../../utils/APIRoutes";
import axios from "axios";

const Aside = () => {
  const [allusers, setAllUsers] = useState([]);
 

  useEffect(() => {
    async function productosDB() {
      const data = await axios.get(allUsersRoute);
      setAllUsers(data.data);
    }
    console.log(allusers)
    productosDB();
  }, []);
  return (
    <>
      <div className="w-[15%] py-[2%] gap-y-10  justify-center  flex max-lg:hidden">
        <div className="flex fixed w-[15%] flex-col  rounded-lg p-3 shadow-lg bg-white dark:text-white dark:bg-[#16181C] max-xl:text-xs">
          <div className="relative w-[100%] py-6 px-4 ">
            <input
              type="search"
              className="w-[100%] text-sm pl-8 p-2 rounded-lg outline-none bg-gray-100 dark:bg-transparent border-search"
              placeholder="Search People"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="top-8 left-6 absolute w-5 h-5 opacity-70 dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className=" text-sm  mt-4 mb-2  pl-6 text font-semibold">FOLLOWING</h4>
            {allusers.slice(0, 5).map((Element) => {
            return (
                <>
                 <div className="flex justify-between p-2 items-center max-xl:px-0">
              <div className="flex w-full gap-4 items-center justify-around">
                
           <img alt=""   src={`data:image/svg+xml;base64,${Element.avatarImage}`} className="w-12 h-10"/>
                <h3 className=" font-extralight">{Element.username}</h3>
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6 plus"
              
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              </div>
            </div>
                </>


            )})}




          </div>
          <div className="w-full">
            <h4 className=" text-sm  mt-8 mb-2  ml-6 text font-semibold">RECOMMENDATION</h4>
            {allusers.slice(5, 10).map((Element) => {
            return (
                <>
                 <div className="flex justify-between p-2 items-center max-xl:px-0">
              <div className="flex w-full gap-4 items-center justify-around">
                
           <img alt=""   src={`data:image/svg+xml;base64,${Element.avatarImage}`} className="w-12 h-10"/>
                <h3 className=" font-extralight">{Element.username}</h3>
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6 plus"
              
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              </div>
            </div>
                </>


            )})}
          </div>
          
       
        </div>
      </div>
    </>
  );
};

export default Aside;

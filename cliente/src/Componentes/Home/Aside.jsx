import React from "react";
import { useState, useEffect } from "react";
import { allUsersRoute } from "../../utils/APIRoutes";
import axios from "axios";

const Aside = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);
  const [notFollowing, setNotFollowing] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncFn = async () => {
      const data = await JSON.parse(
        localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
      );
      setUser(data);
      setUserId(data._id);
    };
    asyncFn();
  }, []);

  const handleFollow = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/users/follow/${userId}`,
        {
          follower: id,
        }
      );
      console.log(response.data);
      setCurrentUser(true);
      getAllUsers();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleUnfollow = async () => {
  //     try {
  //     const response = await axios.post(`http://localhost:5050/unfollow/${_id}`, {
  //     follower: props.currentUserId,
  //     });
  //    setCurrentUser(false);
  //     } catch (error) {
  //     console.error(error);
  //     }
  //     };

  // useEffect(() => {
  //   async function productosDB() {
  //     const data = await axios.get(allUsersRoute);
  //     setAllUsers(data.data);
  //     const followers = await axios.get(
  //       `http://localhost:5050/users/follow/${userId}`
  //     );
  //     setFollowers(data.data);
  //     console.log(followers);
  //   }
  //   console.log(allUsers);
  //   productosDB();
  // }, []);
  // console.log(followers);

  // useEffect(() => {
  //   setNotFollowing(allUsers.filter(user => !followers.includes(user._id)));
  // }, [allUsers, followers]);

  // console.log(notFollowing);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const allUsersResponse = await axios.get(allUsersRoute);
    setAllUsers(allUsersResponse.data);
  };

  useEffect(() => {
    getFollowerUsers();
  }, [allUsers]);
  const getFollowerUsers = async () => {
    const followingResponse = await axios.get(
      `http://localhost:5050/users/follow/${userId}`
    );
    setFollowing(followingResponse.data);
  };

  useEffect(() => {
    setNotFollowing(
      allUsers.filter((user) => !Object.values(following).includes(user._id))
    );
    console.log(notFollowing);
    setLoading(true);
  }, [following]);

  console.log(allUsers);
  console.log(following);
  return (
    <>
      <div className="flex w-[15%] justify-center  gap-y-10  py-[2%] max-lg:hidden">
        <div className="fixed flex w-[15%] flex-col  rounded-lg bg-white p-3 shadow-lg dark:bg-[#16181C] dark:text-white max-xl:text-xs">
          <div className="relative w-[100%] py-6 px-4 ">
            <input
              type="search"
              className="border-search w-[100%] rounded-lg bg-gray-100 p-2 pl-8 text-sm outline-none dark:bg-transparent"
              placeholder="Search People"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="absolute top-8 left-6 h-5 w-5 opacity-70 dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="flex w-full flex-col gap-y-3 ">
            {loading && notFollowing.length > 0 && (
              <>
                <h4 className=" text  mt-4 mb-2  pl-6 text-sm font-semibold">
                  FOLLOWING
                </h4>
                {notFollowing.map((Element) => {
                  return (
                    <>
                      <div className="flex items-center justify-between p-2 max-xl:px-0">
                        <div className="flex w-full items-center ">
                          <a
                            className="flex w-full items-center justify-evenly "
                            href={"/Profile/" + Element._id}
                          >
                            <img
                              alt=""
                              src={`data:image/svg+xml;base64,${Element.avatarImage}`}
                              className="h-10 w-12"
                            />
                            <div className="w-full text-center">
                              <h3 className=" font-extralight">
                                {Element.username}
                              </h3>
                            </div>
                          </a>
                        </div>
                        <button
                          className="color-item text-md rounded-lg p-2 font-light"
                          id={Element._id}
                          onClick={() => handleFollow(Element._id)}
                        >
                          Seguir
                        </button>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
          <div className="w-full">
            <h4 className=" text  mt-8 mb-2  ml-6 text-sm font-semibold">
              RECOMMENDATION
            </h4>
            {allUsers.slice(5, 10).map((Element) => {
              return (
                <>
                  <div className="flex items-center justify-between p-2 max-xl:px-0 ">
                    <div className="flex w-full items-center justify-around gap-4">
                      <img
                        alt=""
                        src={`data:image/svg+xml;base64,${Element.avatarImage}`}
                        className="h-10 w-12"
                      />
                      <h3 className=" font-extralight">{Element.username}</h3>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="blue"
                        className="plus h-6 w-6"
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;

import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProfileUsers() {
  const bgImage =
    "https://images.unsplash.com/photo-1673447043169-a309c86f822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  let { id } = useParams();
  const url = `http://localhost:5050/users/${id}`;
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [followers, setFollow] = useState(undefined);
  const [following, setFollowing] = useState(undefined);
  const [background, setBackground] = useState(undefined);
  useEffect(() => {
    async function productosDB() {
      const data = await axios.get(url);
      setProfile(data.data);
      setCurrentUserName(data.data.username);
      setBackground(data.data.background);
      setCurrentUserImage(data.data.avatarImage);
      setFollow(data.data.followers.length);
      setFollowing(data.data.following.length);
    }
    productosDB();
  }, []);

  console.log(profile);
  return (
    <section>
      <Navbar />
      <div className="relative mt-20 h-full items-center justify-center pb-2">
        <div className="flex flex-col pb-5 dark:text-white">
          <div className="relative mb-7 flex flex-col">
            {/* imagen de fondo */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={background} //hacerlo dinamico con la db
                alt=""
                className="2xl:h-510 h-60 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                className="-mt-10 h-40 w-40 rounded-full object-cover shadow-2xl"
                alt=""
              />
              <h1 className="mt-3 mb-10 text-center text-3xl font-bold">
                {currentUserName}
              </h1>{" "}
              <h5 className=" mb-8 mt-0 text-center">
                {" "}
                Mar del Plata, Argentina
              </h5>
              <div className="flex justify-center gap-9">
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">{following}</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Followers
                  </h3>
                </div>
                <div className="flex w-[33%] flex-col items-center">
                  <h1 className="text-lg font-bold">{followers}</h1>
                  <h3 className="text-xs font-extralight opacity-60">
                    Following
                  </h3>
                </div>
              </div>
              {/*hacerlo dinamico*/}
            </div>

            {/* botones */}
            <div className="mb-7 text-center">
              {/* <Link to='/chat' className="py-3 px-6 container rounded-lg ">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn("share");
            }}
         
          >
            Mensajes
          </button>
          </Link > */}
              {/* <a href="/Login"> */}
              {/* <button  onClick={hadndleLogout} className="dark:text-white bg-blue-600 text-white font-bold p-2 rounded-lg shadow-lg w-40 outline-none">salir</button></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileUsers;

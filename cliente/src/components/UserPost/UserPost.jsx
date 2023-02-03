import React from "react";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const userPost = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();

  const submitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    //imagen
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("http://localhost:5050/upload", data);
      } catch (err) {}
    }
    //texto
    try {
      await axios.post("http://localhost:5050/posts/", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="mb-5 h-full w-1/2  rounded-lg bg-black py-5 items-center">
      <input
        type="text"
        name=""
        id=""
        placeholder="Que estas pensando?"
        className="rounded-lg mx-20 sm:items-center w-1/2 py-1"
        required
        ref={desc}
      />

      <div className=" flex  w-full ">
        <div className=" flex mt-2 mx-20  ">
          <label>
            <svg //imagen
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <input
              className=" hidden"
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <svg //ubicacion
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mx-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <svg //video
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
      <button
        onClick={submitPost}
        type="button"
        id="btn"
        className="mt-8 ml-20 rounded bg-black px-6 py-2.5 text-xs
        font-medium
        uppercase
        leading-tight
        text-white
        shadow-md
        transition
        duration-150
        ease-in-out
        hover:shadow-lg focus:shadow-lg
        focus:outline-none  focus:ring-0 
        active:shadow-lg sm:w-min
        md:w-1/2
        lg:w-1/6"
      >
        Publicar
      </button>
    </div>
  );
};

export default userPost;

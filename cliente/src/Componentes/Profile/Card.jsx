import React from "react";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Card = () => {
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
    <div className="mb-5 h-full w-1/2 justify-center rounded-md bg-white py-5 shadow-md shadow-gray-300">
      <input
        type="text"
        name=""
        id=""
        placeholder="Que estas pensando?"
        className=" ml-10 rounded-lg p-1"
        required
        ref={desc}
      />

      <div className=" flex">
        <button
          onClick={submitPost}
          type="button"
          id="btn"
          className="mt-8 ml-10 rounded bg-black px-6 py-2.5 text-xs
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
        <label className=" -ml-20 mt-2">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <input
                className=" hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
        </label>
        

      </div>
    </div>
  );
};

export default Card;

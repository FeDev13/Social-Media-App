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
        await axios.post("http://localhost:5050/posts/", data);
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
      </div>
    </div>
  );
};

export default Card;

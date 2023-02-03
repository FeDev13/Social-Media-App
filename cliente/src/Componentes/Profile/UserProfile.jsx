import React from "react";
import { useState } from "react";

const UserProfile = () => {
  const [text, setText] = useState("created");
  const [activeBtn, setActiveBtn] = useState("Mensaje");
  const bgImage =
    "https://images.unsplash.com/photo-1673447043169-a309c86f822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const userimage =
    "https://images.unsplash.com/photo-1670582725604-ee64ac849e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  const activeBtnStyles =
    "bg-blue-600 text-white font-bold p-2 rounded-lg shadow-lg w-40 outline-none";

  const notActiveBtnStyles =
    "bg-primary text-black mr-4 font-bold p-2 rounded-lg w-40 outline-none";

  return (
    <div className="relative h-full items-center justify-center pb-2">
      <div className="flex flex-col pb-5">
        <div className="relative mb-7 flex flex-col">
          {/* imagen de fondo */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={bgImage} //hacerlo dinamico con la db
              alt=""
              className="2xl:h-510 h-60 w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src={userimage}
              className="-mt-10 h-40 w-40 rounded-full object-cover shadow-2xl"
              alt=""
            />
            <h1 className="mt-3 mb-10 text-center text-3xl font-bold">
              Usuario anonimo
            </h1>{" "}
            <h5 className=" mb-8 mt-0 text-center">
              {" "}
              Mar del Plata, Argentina
            </h5>
            <div className=" mt-0 mb-10 flex flex-row">
              @user
              <li className=" mx-8">Trabajo actual</li>
              <li>Algo mas</li>
            </div>
            {/*hacerlo dinamico*/}
          </div>

          {/* botones */}
          <div className="mb-7 text-center">
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("Mensaje");
              }}
              className={`${
                activeBtn === "Mensaje" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Mensaje
            </button>
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("share");
              }}
              className={`${
                activeBtn === "share" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Compartir perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

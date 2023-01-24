import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const url = "http://localhost:5050/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post(url, {
        username: username,
        password: password,
      });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUser(user.data.user);
      setUsername("");
      setPassword("");

      console.log(user);
    } catch (exception) {
      console.log("Error al loguearse");
    }
  };

useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  const hadndleLogout = () => {
    setUsername(null);
    window.localStorage.removeItem("loggedNoteappUser");
    window.localStorage.removeItem("theme");
    window.localStorage.removeItem("color");
  };

    const loginForm = () => (
      <div className="flex w-full justify-center bg-[#F3F5F7] dark:bg-black h-screen">
        <div className="flex w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-full max-sm:p-0 items-center justify-center p-[2%]">
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full flex-col items-center rounded-lg dark:text-white bg-white dark:bg-[#16181C] p-[2%]"
          >
            <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 absolute right-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            </Link>
            <div className="my-4 flex w-full justify-center">
              <h1 className="text-3xl font-light">
                Login Your Account{" "}
                <span className="text-5xl font-bold text-blue-800 " >.</span>
              </h1>
            </div>
            <div className="my-4 flex w-full flex-col gap-4">
              <input
                type="text"
                className=" rounded-lg border p-1 outline-none"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                className="rounded-lg border p-1 outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex w-full justify-center">
                <button
                  onSubmit={handleSubmit}
                  className="rounded-lg border dark:border-black bg-blue-800 p-2 text-white "
                >
                  Iniciar Sesion
                </button>
              </div>
              <a className="flex justify-center" href="">
                <h4 className="text-xs text-blue-800 opacity-70">
                  ¿Olvidaste tu contraseña?
                </h4>
              </a>
                <div className="flex justify-center items-center gap-2">
                <h4 className="text-xs text-blue-800 opacity-70">
                  ¿No tenes cuenta? 
                </h4>
                <Link rel="stylesheet" to="/Register" ><span className="text-xs"> Registrare</span> </Link>
                </div>
            </div>
          </form>
        </div>
      </div>)

const logoutForm = () => (   <div className="relative pb-2 h-full justify-center items-center">
<div className="flex flex-col pb-5 dark:text-white">
  <div className="relative flex flex-col mb-7">
    {/* imagen de fondo */}
    <div className="flex flex-col justify-center items-center">
      <img
        src={bgImage} //hacerlo dinamico con la db
        alt=""
        className="w-full h-60 2xl:h-510 shadow-lg object-cover rounded-lg"
      />
      <img
        src={userimage}
        className="rounded-full w-40 h-40 -mt-10 shadow-2xl object-cover"
        alt=""
      />
      <h1 className="font-bold text-3xl text-center mt-3 mb-10">
        Usuario anonimo
      </h1>{" "}
      <h5 className=" text-center mb-8 mt-0">
        {" "}
        Mar del Plata, Argentina
      </h5>
      <div className=" flex flex-row mt-0 mb-10">
        @user
        <li className=" mx-8">Trabajo actual</li>
        <li>Algo mas</li>
      </div>
      {/*hacerlo dinamico*/}
    </div>

    {/* botones */}
    <div className="text-center mb-7">
      <button
        type="button"
        onClick={(e) => {

          setText(e.target.textContent);
          setActiveBtn("Mensaje");
        }}
        className={` dark:text-white ${
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
        className={` dark:text-white ${
          activeBtn === "share" ? activeBtnStyles : notActiveBtnStyles
        }`}
      >
        Compartir perfil
      </button>
      <a href="/Login">
      <button  onClick={hadndleLogout} className="dark:text-white bg-blue-600 text-white font-bold p-2 rounded-lg shadow-lg w-40 outline-none">salir</button></a>
    </div>
  </div>
</div>
</div>)

  return (
    <>
      <div>{user === null ? loginForm() : logoutForm()}</div>
    </>
  );
};

export default Login;

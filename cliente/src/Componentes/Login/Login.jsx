import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const url = "http://localhost:5050/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = {
        username: username,
        password: password,
      };

      const resp = await axios.post(url, bodyFormData);
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUser(user.data.user);
      setUsername("");
      setPassword("");
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
  const hadndleLogout = () => {
    setUsername(null);
    window.localStorage.removeItem("loggedNoteappUser");
  };
  console.log(username);
  console.log(user);
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



  return (
    <>
      <div>{user === null ? loginForm() : logoutForm()}</div>
    </>
  );
};

export default Login;

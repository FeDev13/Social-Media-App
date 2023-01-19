import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const url = "http://localhost:5050/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = {
        username: username,
        password: password,
      };

      const resp = await axios.post(url, bodyFormData);
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="flex w-full justify-center bg-[#F3F5F7]">
        <div className="flex w-[33%] items-center justify-center p-[2%]">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center rounded-lg bg-white p-[2%]"
          >
            <div className="my-4 flex w-full justify-center">
              <h1 className="text-3xl font-light">
                Login Your Account{" "}
                <span className="text-5xl font-bold text-blue-800 ">.</span>
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
                  className="rounded-lg border bg-blue-800 p-2 text-white "
                >
                  Iniciar Sesion
                </button>
              </div>
              <a className="flex justify-center" href="">
                <h4 className="text-xs text-blue-800 opacity-70">
                  ¿Olvidaste tu contraseña?
                </h4>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

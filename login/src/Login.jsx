import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex w-[33%] items-center justify-center p-[2%]">
        <div className="flex w-full flex-col items-center rounded-lg bg-white p-[2%]">
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
              placeholder="Enter your email"
            />

            <input
              type="text"
              className="rounded-lg border p-1 outline-none"
              placeholder="Enter your password"
            />
            <div className="flex w-full justify-center">
              <button className="rounded-lg border bg-blue-800 p-2 text-white ">
                Iniciar Sesion
              </button>
            </div>
            <a className="flex justify-center" href="">
              <h4 className="text-xs text-blue-800 opacity-70">
                ¿Olvidaste tu contraseña?
              </h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

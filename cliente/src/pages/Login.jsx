import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          import.meta.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/chat");
      }
    }
  };
 
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center gap-[1rem] items-center bg-[#131324]">
        <form action="" onSubmit={(event) => handleSubmit(event)} className="flex flex-col gap-[2rem] bg-[#00000076] rounded-lg p-[5rem]">
          <div className="flex items-center gap-[1rem] justify-center">
            <h1 className="font-semibold text-lg text-white ">SOCIAL MEDIA APP</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="bg-transparent p-[1rem] border-solid rounded-lg w-full text-white"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent p-[1rem] border-solid rounded-lg w-full"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="bg-[#4e0eff] px-[2rem] py-[1rem] border-none font-bold cursor-pointer rounded-lg text-lg text-white uppercase hover:bg-[#4e0eff]">Log In</button>
          <span className="text-white uppercase">
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}
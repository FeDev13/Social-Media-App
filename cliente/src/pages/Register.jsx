import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/register");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
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
        navigate("/login");
      }
    }
  };

  return (
    <>
      <section className=" flex flex-col justify-center gap-[1rem] items-center bg-[#131324]">
        <form action="" className="flex flex-col gap-[2rem] rounded-lg py-[3rem] px-[5rem] " onSubmit={(event) => handleSubmit(event)}>
          <div className="flex items-center gap-[1rem] justify-center">
       
            <h1 className="text-white uppercase">snappy</h1>
          </div>
          <input  className=" bg-transparent p-[1rem] text-white w-full text-[1rem] border-yellow-300 border-2 focus:outline-none focus:border-white"
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input  className=" bg-transparent p-[1rem] text-white w-full text-[1rem] border-yellow-300 border-2 focus:outline-none focus:border-white"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input  className=" bg-transparent p-[1rem] text-white w-full text-[1rem] border-yellow-300 border-2 focus:outline-none focus:border-white"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input className=" bg-transparent p-[1rem] text-white w-full text-[1rem] border-yellow-300 border-2 focus:outline-none focus:border-white"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="bg-[#4e0eff] text-white py-[1rem] border-none font-bold cursor-pointer uppercase text-[1rem] hover:bg-[#4e0eff] px-[2rem]">Create User</button>
          <span className="uppercase text-white">
            Already have an account ? <Link to="/login" className="text-[#4e0eff] font-bold">Login.</Link>
          </span>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}


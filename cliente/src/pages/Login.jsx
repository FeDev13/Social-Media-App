import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usersRoute, editRoute, loginRoute } from "../utils/APIRoutes";
import Navbar from "../components/Navbar/Navbar";
import Logout from "../components/Logout";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(null);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    const asyncFn = async () => {
      if (localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
        navigate("/Profile");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
          )
        );
      }
    };
    asyncFn();
  }, []);

  useEffect(() => {
    const asyncFn = async () => {
      const data = await JSON.parse(
        localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
      )._id;
      setId(data);
      const dato = await axios.get(`http://localhost:5050/users/${data}`);
      setCurrentUserName(dato.data.username);
      setBackground(dato.data.background);
      setCurrentUserImage(dato.data.avatarImage);
    };
    asyncFn();
  }, []);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      import.meta.env.REACT_APP_LOCALHOST_KEY
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
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
          JSON.stringify(data.user),
          console.log(data.user),
          setUser(data.user),
          console.log(user)
        );

        navigate("/setAvatar");
      }
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("username", username);
      bodyFormData.append("background", background[0]);
      const resp = await axios.put(
        `http://localhost:5050/users/${id}`,
        bodyFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setCurrentUserName(username);
      setBackground(background);
      window.location.reload()
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // const handleClick = async () => {
  //   var bodyFormData = new FormData();
  //   bodyFormData.append("username", username);
  //   bodyFormData.append("background", background[0]);
  //   const resp = await axios.put(`${editRoute}/${id}`, bodyFormData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  //  
  //   
  // };

  const loginForm = () => (
    <div>
      <section className="h-screen w-full flex flex-col justify-center gap-[1rem] items-center bg-[#131324]">
        <form
          action=""
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col gap-[2rem] bg-[#00000076] rounded-lg p-[5rem]"
        >
          <div className="flex items-center gap-[1rem] justify-center">
            <h1 className="font-semibold text-lg text-white ">
              SOCIAL MEDIA APP
            </h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="bg-transparent p-[1rem] border-solid rounded-lg w-full outline-none border text-white"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent p-[1rem] border-solid rounded-lg w-full border text-white outline-none"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="container  px-[2rem] py-[1rem] border-none font-bold cursor-pointer rounded-lg text-lg text-white uppercase "
          >
            Log In
          </button>
          <span className="text-white uppercase">
            Don't have an account ?{" "}
            <Link to="/register" className="text">
              Create One.
            </Link>
          </span>
        </form>
      </section>
      <ToastContainer />
    </div>
  );


  return (
    <>
      <div>{ loginForm() }</div>
    </>
  );
}

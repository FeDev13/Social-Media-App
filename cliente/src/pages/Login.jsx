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
  const [activeBtn, setActiveBtn] = useState("Mensaje");
  const bgImage =
    "https://images.unsplash.com/photo-1673447043169-a309c86f822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const userImage =
    "http://localhost:5050/upload/product-avatarImage-1675271944477.jpeg";

  const activeBtnStyles =
    "bg-blue-600 text-white font-bold p-2 rounded-lg shadow-lg w-40 outline-none";

  const notActiveBtnStyles =
    "bg-primary text-black mr-4 font-bold p-2 rounded-lg w-40 outline-none";
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(null);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [background, setBackground] = useState("");
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

        navigate("/");
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
      window.location.reload();
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
      <section className="flex h-screen w-full flex-col items-center justify-center gap-[1rem] bg-[#131324]">
        <form
          action=""
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col gap-[2rem] rounded-lg bg-[#00000076] p-[5rem]"
        >
          <div className="flex items-center justify-center gap-[1rem]">
            <h1 className="text-lg font-semibold text-white ">
              SOCIAL MEDIA APP
            </h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full rounded-lg border border-solid bg-transparent p-[1rem] text-white outline-none"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-solid bg-transparent p-[1rem] text-white outline-none"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="container  cursor-pointer rounded-lg border-none px-[2rem] py-[1rem] text-lg font-bold uppercase text-white "
          >
            Log In
          </button>
          <span className="uppercase text-white">
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

  const logoutForm = () => (
    <section>
      <Navbar />
      <form onSubmit={handleClick} encType="multipart/form-data">
        <div className="relative mt-20 h-full items-center justify-center pb-2">
          <div className="flex flex-col pb-5 dark:text-white">
            <div className="relative mb-7 flex flex-col">
              {/* imagen de fondo */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src={background} //hacerlo dinamico con la db
                  alt=""
                  className="2xl:h-510 h-60 w-full rounded-lg object-cover shadow-lg"
                />
                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  className="-mt-10 h-40 w-40 rounded-full object-cover shadow-2xl"
                  alt=""
                />
                <h1 className="mt-3 mb-10 text-center text-3xl font-bold">
                  {currentUserName}
                </h1>{" "}
                <h5 className=" mb-8 mt-0 text-center">
                  {" "}
                  Mar del Plata, Argentina
                </h5>
                <div className=" mt-0 mb-10 flex flex-row">
                  @{currentUserName}
                  <li className=" mx-8">Trabajo actual</li>
                  <li>Algo mas</li>
                </div>
                {/*hacerlo dinamico*/}
              </div>

              {/* botones */}
              <div className="mb-7 text-center">
                {/* <Link to='/chat' className="py-3 px-6 container rounded-lg ">
        <button
          type="button"
          onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn("share");
          }}
       
        >
          Mensajes
        </button>
        </Link > */}
                <div className="flex justify-center gap-4">
                  <Link to="/" className=" w-[20%]">
                    <Logout />
                  </Link>
                  <button
                    className="container w-[20%] cursor-pointer rounded-lg border"
                    type="submit"
                  >
                    Editar Perfil
                  </button>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    onChange={(e) => setBackground(e.target.files)}
                  />
                </div>
                {/* <a href="/Login"> */}
                {/* <button  onClick={hadndleLogout} className="dark:text-white bg-blue-600 text-white font-bold p-2 rounded-lg shadow-lg w-40 outline-none">salir</button></a> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );

  return (
    <>
      <div>{user === null ? loginForm() : logoutForm()}</div>
    </>
  );
}

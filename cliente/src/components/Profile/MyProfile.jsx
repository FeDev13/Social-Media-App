import React from "react";
import Navbar from "../Navbar/Navbar";
import Logout from "../Logout";
import { useEffect,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Profile() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    const [user, setUser] = useState(null);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [background, setBackground] = useState("");

  // Si no hay usuario te redirecciona a login

  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const asyncFn = async () => {
      if (!localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
        navigate("/login");
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
console.log(setCurrentUser)
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

  return (
    <>

    

<section>
      <Navbar />
      <form onSubmit={handleClick} encType="multipart/form-data">
        <div className="relative pb-2 h-full mt-20 justify-center items-center">
          <div className="flex flex-col pb-5 dark:text-white">
            <div className="relative flex flex-col mb-7">
              {/* imagen de fondo */}
              <div className="flex flex-col justify-center items-center">
                <img
                   src={background}//hacerlo dinamico con la db
                  alt=""
                  className="w-full h-60 2xl:h-510 shadow-lg object-cover rounded-lg"
                />
                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  className="rounded-full w-40 h-40 -mt-10 shadow-2xl object-cover"
                  alt=""
                />
                <h1 className="font-bold text-3xl text-center mt-3 mb-10">
                  {currentUserName}
                </h1>{" "}
                <h5 className=" text-center mb-8 mt-0">
                  {" "}
                  descrpcion
                </h5>
                <div className=" flex flex-row mt-0 mb-10">
                  @{currentUserName}
           
                </div>
                {/*hacerlo dinamico*/}
              </div>

              {/* botones */}
              <div className="text-center mb-7">
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
                    className="border w-[20%] container cursor-pointer rounded-lg"
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
</>)

}
import React from "react";
import { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    nombrecompleto: "",
    usuario: "",
    email: "",
    password: "",
    repassword: "",
  });
  /*   const navigate = useNavigate(); */

  const alertError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5050/users/", {
        ...values,
      });
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) alertError(email);
          else if (password) alertError(password);
        } else {
          /* navigate("/"); */
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <div className="min-h-screen py-40">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-black font-extrabold text-3xl">
                  Bienvenido/a a nuestra social app!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Registrate</h2>
              <p className="mb-4">Crea tu cuenta. Solo tomara unos minutos</p>
              <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="border border-gray-400 py-1 px-2 rounded-lg"
                    name="nombrecompleto"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="border border-gray-400 py-1 px-2 rounded-lg"
                    name="usuario"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full rounded-lg"
                    name="email"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="border border-gray-400 py-1 px-2 w-full rounded-lg"
                    name="password"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="border border-gray-400 py-1 px-2 w-full rounded-lg"
                    name="repassword"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400 mx-4"
                  />
                  <span>
                    Acepto los
                    <a href="#" className="font-semibold">
                      Terminos y condiciones
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-black py-3 text-center text-white rounded-lg">
                    Registrate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;

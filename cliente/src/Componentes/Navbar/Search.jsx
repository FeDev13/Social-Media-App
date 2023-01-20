import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export function Search() {
    const url = "http://localhost:5050/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const user = await axios.get(url);
      setUsers(user.data);
    }
    productosDB();
  }, []);
  let { buscar } = useParams(); 


console.log(buscar)
  return (<>
      <Navbar />
  
      {users.map((Element, index) => {
              if (
                Element.username.trim().toLowerCase().includes(buscar.toLowerCase())
              ) {
                return (
                    <div className="flex mt-48 gap-5 p-2">
<h1 className="">{Element.fullname}</h1>
<img src={Element.profilePicture} alt="" />
<h4> {Element.email}</h4>
</div>
                )
              }})}

  
  </>);
}


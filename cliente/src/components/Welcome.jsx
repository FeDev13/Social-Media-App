import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const asyncFn = async () => { setUserName(
      await JSON.parse(
        localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
      ).username
    ); };
    asyncFn();
  }, []);
  return (
    <section className="flex justify-center items-center text-white flex-col">
      <img src={Robot} alt="" className="h-[20rem]" />
      <h1>
        Welcome, <span className="text-[#4e0eff]">{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      </section>
  );
}



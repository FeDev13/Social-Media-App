import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect( () => {
    const asyncFn = async () => { const data = await JSON.parse(
      localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage); };
    asyncFn();
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <section className=" grid grid-rows-[10%,75%,15%] overflow-hidden bg-[#080420]">
          <div className="flex justify-center items-center gap-[1rem] ">
            <h3 className="text-white font-bold " >SOCIAL MEDIA APP</h3>
          </div>
          <div className="flex flex-col items-center overflow-auto gap-[0.8rem]">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "bg-[#0c0331] w-full p-3 rounded-lg flex items-center justify-center gap-[2rem]" : "flex items-center justify-center gap-[2rem]"
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div >
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="" className="h-[4rem]"
                    />
                  </div>
                  <div className="text-white font-light text-lg">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-[2rem] bg-[#0c0331]">
            <div className="">
              <img className="h-[4rem] inline"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="text-white">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
}


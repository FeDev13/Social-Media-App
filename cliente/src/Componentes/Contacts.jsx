import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    const asyncFn = async () => {
      const data = await JSON.parse(
        localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
      );
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    };
    asyncFn();
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <section className=" mt-5 grid grid-rows-[10%,75%,15%] overflow-hidden bg-white dark:bg-[#22232c] ">
          <div className="mt-4 flex items-center justify-center gap-[2rem] ">
            <h3 className="font-bold text-black dark:text-white ">CHATS</h3>
          </div>
          <div className="flex flex-col  gap-[0.8rem] overflow-auto">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected
                      ? "container flex w-full items-center justify-center gap-[2rem] p-3 text-white dark:text-black"
                      : " flex items-center justify-center gap-[2rem] text-black dark:text-white"
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div>
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                      className="h-[4rem]"
                    />
                  </div>
                  <div className=" text-lg font-bold">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container flex items-center justify-center gap-[2rem]">
            <div className="">
              <img
                className="inline h-[4rem]"
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div
              className="uppercase text-white
            "
            >
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

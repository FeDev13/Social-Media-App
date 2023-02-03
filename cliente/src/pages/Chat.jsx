import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
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
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const asyncFn = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    asyncFn();
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-center gap-[1rem] bg-[#131324] ">
        <div className="mt-[4%] grid h-full w-[100vw] grid-cols-[25%,75%] bg-[#00000076]">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </section>
    </>
  );
}

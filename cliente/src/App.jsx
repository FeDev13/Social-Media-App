import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/MainHome";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={[<div > <Navbar/>,<Home/></div>]} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat" element={[<Navbar/>, <Chat />]} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

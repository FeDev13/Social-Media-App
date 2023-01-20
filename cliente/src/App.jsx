import React from 'react';
import Home from "./Componentes/Home/MainHome" 
import Login from './Componentes/Login/Login';
import Navbar from './Componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from './Componentes/Profile/UserProfile';
import { Search } from './Componentes/Navbar/Search';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={[<Navbar/>,<Home/>]} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/Search/:buscar" element={<Search />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

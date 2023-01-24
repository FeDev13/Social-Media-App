import React from 'react';
import Home from "./Componentes/Home/MainHome" 
import Login from './Componentes/Login/Login';
import Navbar from './Componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from './Componentes/Profile/UserProfile';
import { Search } from './Componentes/Navbar/Search';
import Register from './Componentes/Login/Register';

function App() {

  return (
    <>

     <BrowserRouter>
     <div className=' bg-white dark:bg-black h-screen'>
        <Routes>
        <Route path="/" element={[<div > <Navbar/>,<Home/></div>]} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/Search/:buscar" element={<Search />} />
        </Routes>
        </div>
      </BrowserRouter>
    
    </>
  )
}

export default App

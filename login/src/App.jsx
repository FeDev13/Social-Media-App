import React from 'react';
import Home from "./Componentes/HomePageContent/MainHome" 
import Login from './Componentes/Login';
import Navbar from './Componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={[<Navbar/>,<Home/>]} />
        <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

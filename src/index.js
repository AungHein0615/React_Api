import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Navbar from "./header/Navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Dashboard from "./dashboard/Dashboard"
import Profile from "./profile/Profile"
import Setting from "./setting/Setting"
import Details from "./details/Details";



function App(){
  return (
    <>
     
      <BrowserRouter >
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/details/:id" element={<Details />}> </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
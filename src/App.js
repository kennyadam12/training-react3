import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Awards from './pages/awards';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Interest from './pages/interest';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

function App() {
  
return(
    <>
     <div className='container'>
      <div className='left'>
        <Navbar></Navbar>
      </div>
      <div className='right'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/interest" element={<Interest/>}></Route>
          <Route path="/awards" element={<Awards/>}></Route>
        </Routes>
        <p className='copyright'><b>© Kenny 2022</b></p>
      </div>
     </div>
    </>
  );
}
export default App;
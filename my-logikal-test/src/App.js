import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import HomeId from './pages/HomeId';


function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Link className='linkText' to={'/'}>About</Link>
        <Link className='linkText' to={'/home'}>Home</Link>
      </Navbar>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path="/home" element={<Home />}/>
        <Route path='/home/:id' element={<HomeId />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;









import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, Landing, Love, Ordinary} from './components'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="love-by-design" element={<Love/>} />
        <Route path="ordinary-angels" element={<Ordinary/>} />
      </Routes>
  </BrowserRouter>
  );    
}

export default App;

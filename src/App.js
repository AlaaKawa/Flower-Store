import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import Products from './components/Products';
import Home from './Pages/Home';
import About from './Pages/About';
import Cactus from './Pages/ProductsType.js/Cactus';
import All from './Pages/ProductsType.js/All';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="cactus" element={<Cactus />} />

        <Route path="all" element={<All />} />




      </Routes>
    </div>

  );
}


export default App;

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



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />



      </Routes>
    </div>

  );
}


export default App;

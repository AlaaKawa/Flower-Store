import React from 'react';



import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import Products from './components/Products';


function App() {
  return (
    <div className="App">

      <HeroSection />
      <CategorySection></CategorySection>
      <Products />

    </div>

  );
}

export default App;

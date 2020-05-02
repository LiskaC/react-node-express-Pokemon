import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Footer from './Components/Footer';
import SpinningPokeball from './Components/Pokeball';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Navbar />
        <div className="app-body">
          <Card />
          <SpinningPokeball />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

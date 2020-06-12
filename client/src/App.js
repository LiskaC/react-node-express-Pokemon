import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import LandingPage from './Components/auth/LandingPage';
import About from './Components/About';
import Search from './Components/Search';
import Compare from './Components/Compare';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SpinningPokeball from './Components/Pokeball';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/compare" component={Compare} />
            <Route path="/search" component={Search} />
          </Switch>
          <SpinningPokeball />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

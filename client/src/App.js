import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './App.css';
//import LandingPage from './Components/auth/LandingPage';
import Compare from './Components/Compare';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LandingPage from './Components/auth/LandingPage';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import SpinningPokeball from './Components/Pokeball';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LandingPage} />
            <Route path="/compare" component={Compare} />
            <Route path="/search" component={Search} />
            <Route path="/test" component={Test} />
          </Switch>
          <SpinningPokeball />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import About from './Components/About';
import Search from './Components/Search';
import Compare from './Components/Compare';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SpinningPokeball from './Components/Pokeball';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <BrowserRouter>
          <Navbar />
          <div className="app-body">
            <Switch>
              <Route path="/about" exact component={About} />
              <Route path="/search" component={Search} />
              <Route path="/compare" component={Compare} />
            </Switch>
            <SpinningPokeball />
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

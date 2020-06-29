import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './App.css';
//import LandingPage from './Components/auth/LandingPage';
import Compare from './Components/Compare';
import Footer from './Components/Footer';
import History from './history';
import Home from './Components/Home';
import LandingPage from './Components/auth/LandingPage';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/auth/PrivateRoute';
import Search from './Components/Search';
import SpinningPokeball from './Components/Pokeball';
import Test from './Components/Test';
import UserProvider from './Contexts/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <div className="app-body">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={LandingPage} />
              <PrivateRoute path="/compare" component={Compare} />
              <PrivateRoute path="/search" component={Search} />
              <Route path="/test" component={Compare} />
            </Switch>
            <SpinningPokeball />
          </div>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

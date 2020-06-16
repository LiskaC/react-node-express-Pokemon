import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AllPokemon from '../Images/all-pokemon.png';
import '../Styles/Link.css';

export default class HomeCardMessage extends Component {

  render() {
    return (
      <div className="aboutMessage">
        <p>This is a website about Pokemon</p>
        <div className="authentication-links">
          <Link className="link login-link" to="/login">Login</Link>
        </div>
        <img className="all-pokemon" src={AllPokemon} alt="all-pokemon" ></img>
      </div>
    )
  }
}
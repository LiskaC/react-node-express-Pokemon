import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
        <Link className="link home-link" to="/">Home</Link>
        <Link className="link compare-link" to="/compare">Compare</Link>
        <Link className="link search-link" to="/search">Search</Link>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

export default class Navbar extends Component {
  toAbout = () => {
    //this.props.history.push('/about');
    console.log('hellothere')
    console.log(this.props);
  }

  render() {
    return (
      <div className="Navbar">
        <Link className="about-link" to="/about">About</Link>
        <Link className="about-compare" to="/compare">Compare</Link>
        <Link className="about-search" to="/search">Search</Link>
      </div>
    )
  }
}
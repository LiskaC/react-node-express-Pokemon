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
        <Link className="link about-link" to="/about">About</Link>
        <Link className="link compare-link" to="/compare">Compare</Link>
        <Link className="link search-link" to="/search">Search</Link>
      </div>
    )
  }
}
import React, { Component, useContext } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
import UserProvider from '../Contexts/UserProvider';

export default class Navbar extends Component {

  //  const userData = useContext = useContext(UserProvider.context);
  //const loginType = !//_.isEmpty(userData) ? _.find(data, d => d.name === userData.provider : {}' )

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
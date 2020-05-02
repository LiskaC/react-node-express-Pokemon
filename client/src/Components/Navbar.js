import React, { Component } from 'react';
import '../Styles/Navbar.css';
import Button from './Button.js';

export default class Navbar extends Component {
  //  toAbout = () => {
  //   this.props.history.push('/about');
  //}

  render() {
    return (
      <div className="Navbar">
        <Button text="About" /*onClick={this.toAbout} */ />
        <Button text="Compare Pokemon" />
        <Button text="Search Pokemon" />
      </div>
    )
  }
}
import React, { Component } from 'react';
import '../Styles/Button.css';

export default class Button extends Component {
  handleClick = (e) => {
    e.preventDefault();
    alert("A CLICK HAPPENED! Now just to get this to do something useful")
    // get this to respond with appropriate Card content AND make pokeball appear
  }

  render() {
    return (
      <div className="button" onClick={this.handleClick}>
        <p className="button-text">{this.props.text}</p>
      </div>
    )
  }
}
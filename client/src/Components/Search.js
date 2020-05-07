import React, { Component } from 'react';
import '../Styles/Button.css';

import Card from './Card';

const message =
  <div className="card-contents">
    <p>Searching Searching Searching</p>

    <form>
      <label>Get me a random group of
  <input type="number" name="number-of-pokemon"></input>
    1st Gen Pokemon, sorted in order of AWESOMENESS
  </label>
      <div className="button">
        <input type="submit" value="GO!" />
      </div>
    </form>
  </div>

export default class Search extends Component {
  render() {
    return (
      <Card cardText={message} />
    ) //can submit input be a button ?
  }
}
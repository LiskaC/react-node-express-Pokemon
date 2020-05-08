import React, { Component } from 'react';
import '../Styles/Button.css';

import Card from './Card';

const message =
  <div className="card-contents">
    <p>Show all stats for:</p>

    <form>
      <label>
        <input type="text" name="name-of-pokemon" placeholder="Pokemon Name"></input>
      </label>
      <div className="button">
        <input type="submit" value={`I choose you!`} />
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
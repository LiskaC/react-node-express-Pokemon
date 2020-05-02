import React, { Component } from 'react';
import '../Styles/Button.css';

export default class Search extends Component {
  render() {
    return (
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
    ) //can submit input be a button ?
  }
}
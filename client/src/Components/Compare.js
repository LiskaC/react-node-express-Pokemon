import React, { Component } from 'react';
import Card from './Card';
import ComparisonResultsTable from './ResultsTable';

//could not declare these variables inside the class Component - why?
const message = <div className="compare-text">
  <p>Get me a random group of</p>

  <form>
    <label>
      <input type="number" name="number-of-pokemon"></input>
      <br></br>
1st Gen Pokemon, sorted in order of AWESOMENESS
</label>
    <div className="button">
      <input type="submit" value="GO!" />
    </div>
  </form>
</div>

const results = <ComparisonResultsTable />;

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNumber: []
    }
  };

  render() {
    return (
      <div>
        <Card
          cardText={message}
          resultsTable={results}
        />
      </div>
    );
  }
}
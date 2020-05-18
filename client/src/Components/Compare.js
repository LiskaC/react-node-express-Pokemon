import React, { Component } from 'react';
import Card from './Card';
import ComparisonResultsTable from './ResultsTable';

//could not declare these variables inside the class Component - why?
const Message = ({ onSubmit, onTextInput, pokemonNumber }) => <div className="compare-text">
  <p>Get me a random group of</p>

  <form onSubmit={onSubmit}>
    <label>
      <input type="number" name="number-of-pokemon" onChange={onTextInput} value={pokemonNumber} />
      <br></br>
1st Gen Pokemon, sorted in order of AWESOMENESS
</label>
    <div className="button">
      <input type="submit" value="GO!" />
    </div>
  </form>
</div>
//onsubmit

const results = <ComparisonResultsTable />;

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNumber: 0
    }
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    //use state to pass in value to function
    const response = await fetch("/express_backend");
    console.log(response.json());
  };

  handleUserInput = (e) => {
    this.setState({ pokemonNumber: e.target.value })
  };

  render() {
    return (
      <div>
        <Card
          cardText={<Message
            onSubmit={this.handleOnSubmit}
            onTextInput={this.handleUserInput}
            pokemonNumber={this.state.pokemonNumber} />}
          resultsTable={results}
        />
      </div>
    );
  }
}
import React, { Component } from 'react';
import '../Styles/Compare.css'
import Card from './Card';
import ResultsTable from './ResultsTable';

//could not declare these variables inside the class Component - why?
const Message = ({ onSubmit, onTextInput, pokemonNumber }) => <div className="compare-text">
  <p>Get me a random group of</p>

  <form onSubmit={onSubmit}>
    <label className="label">
      <input
        type="number"
        name="number-of-pokemon"
        onChange={onTextInput}
        value={pokemonNumber} />
      <br></br>
      1st Gen Pokemon, sorted in order of AWESOMENESS
      <br></br>
    </label>

    <div className="button">
      <input type="submit" value="GO!" />
    </div>
  </form>
</div>
//onsubmit


export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNumber: 0,
      searchResults: []
    }
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();

    const searchNumber = this.state.pokemonNumber;
    const url = "http://localhost:5000/express_backend/"

    const inputResponse = await fetch(url + `${searchNumber}`);


    inputResponse.json()
      .then(res => {
        this.setState({
          searchResults: res
        });
      });
  };

  handleUserInput = (e) => {
    this.setState({ pokemonNumber: e.target.value })
  };

  render() {
    return (
      <div className="compare-body">
        <Card
          cardText={<Message
            onSubmit={this.handleOnSubmit}
            onTextInput={this.handleUserInput}
            pokemonNumber={this.state.pokemonNumber} />}
        />
        <ResultsTable
          searchResults={this.state.searchResults} />
      </div>
    );
  }
}
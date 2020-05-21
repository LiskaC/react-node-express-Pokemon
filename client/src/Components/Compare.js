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
      pokemonNumber: 0,
      searchResults: []
    }
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();



    const searchNumber = this.state.pokemonNumber;
    let url = "http://localhost:5000/express_backend/"

    const inputResponse = await fetch(url + `${searchNumber}`);


    inputResponse.json()
      .then(res => {
        this.setState({
          searchResults: res
        });

        console.log(this.state.searchResults)
      });
    console.log(this.state.searchResults)


    //then response.json() etc as below
    /*
        // returns static array of 5
        const response = await fetch("/express_backend");
    
        response.json()
          .then(res => {
            this.setState({
              searchResults: res
            })
          })
          .catch(err => console.log(err));
        // currently the state is only changing within the .then function,
        // why isn't this change in state being remembered?*/

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
import React, { Component } from 'react';
import '../Styles/Button.css';

import Card from './Card';

const Message = ({ onTextInput, onSubmit, pokemonName }) =>
  <div className="card-contents">
    <p>Show all stats for:</p>

    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="name-of-pokemon"
          placeholder="Pokemon Name"
          onChange={onTextInput}
          value={pokemonName} />
      </label>
      <div className="button">
        <input type="submit" value={`I choose you!`} />
      </div>
    </form>
  </div>


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: "",
      searchResults: []
    }
  };

  handleUserInput = (e) => {
    this.setState({ pokemonName: e.target.value })
    console.log(this.state.pokemonName);
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();

    const searchName = this.state.pokemonName;
    const url = "http://localhost:5000/search_name/";


    //one error is happening here (line 48) : GET 500 internal error
    const inputResponse = await fetch(url + `${searchName}`);

    console.log('point1');

    inputResponse.json()
      .then(res => {
        //not entering into this function
        //second error here : search:1 Uncaught (in promise) SyntaxError: 
        //Unexpected token < in JSON at position 0
        this.setState({
          searchResults: res
        });
        console.log(this.state.searchResults);

      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Card cardText={<Message
        onTextInput={this.handleUserInput}
        onSubmit={this.handleOnSubmit}
        pokemonName={this.state.pokemonName} />}
      />
    )
  }
}
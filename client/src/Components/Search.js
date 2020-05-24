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
    const url = "http://localhost:5000/express_backend/";


    //one error is happening here : GET 500 internal error
    const inputResponse = await fetch(url + `${searchName}`);

    console.log('point1');
    inputResponse.json()
      .then(res => {
        //not entering into this function
        this.setState({
          searchResults: res
        });
        console.log(this.state.searchResults);

      });

    setTimeout(() => console.log("point3"), 3000);
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
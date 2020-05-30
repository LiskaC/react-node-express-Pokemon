import React, { Component } from 'react';
import SpinningPokeball from './Pokeball';
import Card from './Card';
import ResultsTable from './ResultsTable';
import '../Styles/Search.css'
import '../Styles/Button.css';

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
      loading: false,
      pokemonName: "",
      searchResults: []
    }
  };

  //loading spinning pokeball
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500)
  };



  handleUserInput = (e) => {
    this.setState({ pokemonName: e.target.value })
    console.log(this.state.pokemonName);
  };



  handleOnSubmit = async (e) => {
    e.preventDefault();

    const searchName = this.state.pokemonName;
    const url = "http://localhost:5000/search_name/";


    const inputResponse = await fetch(url + `${searchName}`);

    inputResponse.json()
      .then(res => {
        this.setState({
          searchResults: res
        });
        console.log(this.state.searchResults);

      })
      .catch(err => console.log(err));
  };


  ///////////////////


  handleUserInputTypeAhead = async (e) => {
    this.setState({ pokemonName: e.target.value })

    const pokemon = [];
    const endpoint = "http://localhost:5000/search_string"

    const response = await fetch(endpoint);
    response.json()
      .then(data => pokemon.push(...data));


    const findmatches = (stringToMatch, pokemon) => {
      stringToMatch = this.state.pokemonName;

      return pokemon.filter(pokemon => {
        const regex = new RegExp(stringToMatch, 'gi');
        /*
        result = pokemon.name.match(regex);
          this.setState({
            searchResults: result
          });*/
        return pokemon.name.match(regex);
      })
    }
    findmatches('Pon')
  }

  ///////////////

  render() {
    let spinningLoad;
    if (this.state.loading) {
      return spinningLoad = <SpinningPokeball />;
    }

    return (
      <div className="search-body">

        {spinningLoad}
        <Card cardText={<Message
          onTextInput={this.handleUserInput}
          onSubmit={this.handleOnSubmit}
          pokemonName={this.state.pokemonName} />}
        />

        <ResultsTable searchResults={this.state.searchResults} />
      </div>
    )
  }
}
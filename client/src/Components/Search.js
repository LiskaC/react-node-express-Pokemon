import React, { Component } from 'react';
import SpinningPokeball from './Pokeball';
import Card from './Card';
import ResultsTable from './ResultsTable';
import '../Styles/Search.css'

const Message = ({ onTextInput, onSubmit, pokemonName, error }) =>
  <div className="card-contents">
    <p>Show all stats for:</p>

    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="name-of-pokemon"
          placeholder="Pokemon Name"
          onChange={onTextInput}
          value={pokemonName}
          className="name-input" />
      </label>
      <div className="submit-button-div">
        <input type="submit" value={`I choose you!`} className="submit-button" />
      </div>
      <label>{error}</label>
    </form>
  </div>


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemonName: "",
      searchResults: [],
      error: ""
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
    const url = "/search_name/";


    const inputResponse = await fetch(url + `${searchName}`);

    inputResponse.json()
      .then(res => {
        if (res.length === 0) {
          this.setState({
            error: "Pokemon not found (check capitalisation)",
            searchResults: []
          });
        } else {
          this.setState({
            error: "",
            searchResults: res
          });
        }
      })
      .catch(err => console.log(err));
  };


  ///////////////////


  handleUserInputTypeAhead = async (e) => {
    this.setState({ pokemonName: e.target.value })

    const pokemon = [];
    const endpoint = "/search_string"

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
          pokemonName={this.state.pokemonName}
          error={this.state.error} />}
        />

        <ResultsTable searchResults={this.state.searchResults} />
      </div>
    )
  }
}
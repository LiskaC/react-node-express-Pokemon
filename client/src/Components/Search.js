import React, { Component } from 'react';
import SpinningPokeball from './Pokeball';
import Card from './Card';
import ResultsTable from './ResultsTable';
import SearchCardMessage from './Texts/SearchCardMessage';
import '../Styles/Search.css'

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
            error: "Pokemon not found. Sure it's 1st Gen? ",
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


  /////////////////// handleUserInputTypeAhead currently not functioning, see notes.txt


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
        <Card cardText={<SearchCardMessage
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
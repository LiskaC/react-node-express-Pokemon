import React, { Component } from 'react';
import Card from './Card';
import ResultsTable from './ResultsTable';
import SpinningPokeball from './Pokeball';
import CompareCardMessage from './Texts/CompareCardMessage';
import '../Styles/Compare.css'

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemonNumber: 0,
      searchResults: []
    }
  };

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500)
  };

  handleUserInput = (e) => {
    this.setState({ pokemonNumber: e.target.value })
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();

    const searchNumber = this.state.pokemonNumber;
    const url = "/search_number/";

    const inputResponse = await fetch(url + `${searchNumber}`);


    inputResponse.json()
      .then(res => {
        this.setState({
          searchResults: res
        });
      });
  };

  render() {
    let spinningLoad;
    if (this.state.loading) {
      return spinningLoad = <SpinningPokeball />;
    }

    return (
      <div className="compare-body">

        {spinningLoad}
        <Card
          cardText={<CompareCardMessage
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
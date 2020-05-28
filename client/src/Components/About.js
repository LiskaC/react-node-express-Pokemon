import React, { Component } from 'react';
import SpinningPokeball from './Pokeball';
import Card from './Card';
import AllPokemon from '../Images/all-pokemon.png';
import '../Styles/About.css';

const message = <div className="aboutMessage">
  <p>This is a website about Pokemon</p>
  <img className="all-pokemon" src={AllPokemon} alt="all-pokemon" ></img>
</div>

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500)
  };


  render() {
    let spinningLoad;
    if (this.state.loading) {
      return spinningLoad = <SpinningPokeball />;
    }

    return (
      <div className="card-contents">
        <Card cardText={message} />
        {spinningLoad}
      </div>
    )
  }
}
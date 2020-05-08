import React, { Component } from 'react';

import '../Styles/Card.css';
import SpinningPokeball from './Pokeball';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  //is there a way to write all this spinning/loading just once? have also tried to writing into components, not sure which way to go
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
    }, 2000)
    this.setState({ loading: false });
  };


  render() {
    let spinningLoad;
    if (this.state.loading) {
      return spinningLoad = <SpinningPokeball />;
    }

    return (
      <div className="display-card">
        {spinningLoad}
        {this.props.cardText}
        {this.props.resultsTable}
      </div >
    )
  }
}
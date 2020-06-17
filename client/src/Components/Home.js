import React, { Component } from 'react';
import SpinningPokeball from './Pokeball';
import Card from './Card';
import HomeCardMessage from './Texts/HomeCardMessage'
import '../Styles/Home.css';

export default class Home extends Component {
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
        <Card cardText={<HomeCardMessage />} />
        {spinningLoad}
      </div>
    )
  }
}
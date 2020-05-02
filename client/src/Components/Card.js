import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import '../Styles/Card.css';
import About from './About';
import Search from './Search';
import Compare from './Compare';
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
        <BrowserRouter>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/search" component={Search} />
            <Route path="/compare" component={Compare} />
          </Switch>
        </BrowserRouter>
        {spinningLoad}
      </div >
    )
  }
}
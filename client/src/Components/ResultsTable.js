import React, { Component } from 'react';
import '../Styles/ResultsTable.css';

export default class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resData: []
    }
  };

  //take data from searchResults prop and render in list

  render() {
    /*
    //how do I only render the elements if the results value exists?
    const isSearched = this.props.searchResults[0];
    //breaks page if result null
    let card;
    if (isSearched) {
      card =
        <div className="results-card-group">

          {this.props.searchResults.map((result, i) => {
            return (
              <div className="results-card" key={i}>
                <h4>{result.name}</h4>
                <h5>{result.type}</h5>
                <h4>Stats: </h4>
                <h5>Total: {result.total}</h5>
                <h5>Attack {result.attack} <span role='img' aria-label="sword">⚔️</span>
                  <span />| <span /> Defense {result.defense}<span role='img' aria-label="shield">🛡  </span>
                  <span />| <span /> Speed {result.speed} <span role='img' aria-label="horse">🐎</span></h5>
                <h5>Weight: {result.weight}<span /> Evolves from: {result.evolves_from}</h5>
              </div>
            )
          })}

        </div>
    } else {
      card =
        <div className="results-card-group">

          {this.props.searchResults.map((result, i) => {
            return (
              <div className="results-card" key={i}>
                <h4>{result.name}</h4>
                <h5>{result.type}</h5>
                <h4>Stats: </h4>
                <h5>Total: {result.total}</h5>
              </div>
            )
          })}

        </div>
    }
*/
    return (
      <div className="results-card-group">

        {this.props.searchResults.map((result, i) => {
          return (
            <div className="results-card" key={i}>
              <h4>{result.name}</h4>
              <h5>{result.type}</h5>
              <h4>Stats: </h4>
              <h5>Total: {result.total}</h5>
              <h5>Attack {result.attack} <span role='img' aria-label="sword">⚔️</span>
                <span />| <span /> Defense {result.defense}<span role='img' aria-label="shield">🛡  </span>
                <span />| <span /> Speed {result.speed} <span role='img' aria-label="horse">🐎</span></h5>
              <h5>Weight: {result.weight}<span /> Evolves from: {result.evolves_from}</h5>
            </div>
          )
        })}

      </div>
    )
  }
};
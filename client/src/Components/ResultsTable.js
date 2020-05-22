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
    return (
      <div className="results-card-group">

        {this.props.searchResults.map((result, i) => {
          return (
            <div className="results-card" key={i}>
              <h4>{result.name}</h4>
              <h5>{result.type}</h5>
              <h5>{result.total}</h5>
            </div>
          )
        })}

      </div>

    )
  }
};
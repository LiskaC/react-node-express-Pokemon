import React, { Component } from 'react';

export default class ComparisonResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resData: []
    }
  };

  //tomorrow edit here 
  /*
  getData = number => {
    let url =
      (process.env.REACT_APP_API_URL || "http://localhost:5000") +
      `/api/stories`;
    if (number)
      url =
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/api/stories/${number}`;
    axios.get(url).then(res => {
      this.setState({
        resData: res.data
      });
    });
  };

  componentDidMount() {
    this.getData()
  };
  */

  render() {
    return (
      <div className="comparison-results-table">
        <ul>
          <li>thing one</li>
        </ul>
      </div>
    )
  }
};
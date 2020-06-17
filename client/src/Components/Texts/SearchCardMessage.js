import React, { Component } from 'react';

export default class SearchCardMessage extends Component {

  render() {
    return (
      <div className="card-contents">
        <p>Show all stats for:</p>

        <form onSubmit={this.props.onSubmit}>
          <label>
            <input
              type="text"
              name="name-of-pokemon"
              placeholder="Pokemon Name"
              onChange={this.props.onTextInput}
              value={this.props.pokemonName}
              className="name-input" />
          </label>
          <div className="submit-button-div">
            <input type="submit" value={`I choose you!`} className="submit-button" />
          </div>
          <label>{this.props.error}</label>
        </form>
      </div>
    )
  }
}
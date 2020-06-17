import React, { Component } from 'react';

export default class CompareCardMessage extends Component {

  render() {
    return (
      <div className="compare-text">
        <p>Get me a random group of {this.props.pokemonNumber} Pokemon</p>

        <form onSubmit={this.props.onSubmit}>
          <label>
            <input
              type="number"
              name="number-of-pokemon"
              onChange={this.props.onTextInput}
              value={this.props.pokemonNumber}
              className="number-input" />
          </label>
          <div className="button">
            <input type="submit" value={`Go!`} className="submit-button" />
          </div>
        </form>
      </div>
    )
  }
}
import React, { Component } from 'react';
import Card from './Card';


const message = <p>Compare your pokemon here</p>

export default class Compare extends Component {

  render() {
    return (
      <div>
        <Card cardText={message} />
      </div>
    );
  }
}
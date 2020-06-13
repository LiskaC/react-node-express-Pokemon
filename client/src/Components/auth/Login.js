import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  // handleFormSubmit //write this

  // handleChange //write this

  render() {
    return (
      <div className="loginDiv">
        <h1>Log In</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <button type="submit" name="submit">
            Log In!
          </button>
        </form>
      </div>
    )
  }
}
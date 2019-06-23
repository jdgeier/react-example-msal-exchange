import React, { Component } from 'react';
import './App.css';
import LoginComponent from './Components/Login'
import ExchangeComponent from './Components/Exchange'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountInfo: this.props.aadResponse || null,
      LoginType: "redirect",
    };
  }
  accountInfoCallback = accountInfo => {
    this.setState({ accountInfo });
  };
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <LoginComponent
          accountInfoCallback={this.accountInfoCallback}
          accountInfo={this.state.accountInfo}
        />
        {this.state.accountInfo && (
          <ExchangeComponent
            accountInfo={this.state.accountInfo}
          />
        )}
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VotingCard from './components/shared/VotingCard/VotingCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to NukaMC</h2>
        </div>
        <h1 className={"Voting-Intro"}>Thanks supporting NukaMC by Voting</h1>
        <VotingCard/>
      </div>
    );
  }
}

export default App;

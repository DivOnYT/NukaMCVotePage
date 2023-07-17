import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VotingCard from './components/shared/VotingCard/VotingCard'
import voting from "./components/shared/VotingCard/voting.png";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to NukaMC</h2>
        </div>
        <h1 className={"Voting-Intro"}>Thanks supporting NukaMC by Voting</h1>

        <div className={'Card-Header'} as={'h5'}>
          Voting for NukaMC
          <img className={'Title-Icon'} src={voting}></img>
        </div>
        <div className={'VotingCard'}>
          <VotingCard title={'TEST 102983'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus lacus, viverra vel justo nec, finibus pharetra odio. Etiam id turpis non sem blandit fermentum. Donec ultricies varius tellus, quis pulvinar tortor bibendum sit amet. Sed ante orci, congue eget lobortis a, scelerisque vel mi. Maecenas vestibulum elit sed mauris tristique, eget dapibus neque convallis. Donec molestie urna eget magna malesuada, eu consectetur turpis dignissim. Curabitur quam massa, imperdiet nec urna at, imperdiet pretium justo. Fusce velit orci, scelerisque in congue non, luctus eu nibh.'
          } voteLink={"https://best-minecraft-servers.co/server-nukamc.17954/vote"} voteImage={"https://best-minecraft-servers.co/votebanner-17954-4D5988.png"}/>
          <hr></hr>
          <VotingCard title={"C'est Moi"} description={'Comment Ca va?'} voteLink={"https://best-minecraft-servers.co/server-nukamc.17954/vote"} voteImage={"https://best-minecraft-servers.co/votebanner-17954-4D5988.png"}/>
          <hr></hr>
        </div>
        <h3 className={'Credits-Label'}>Made By div_yt. Join us in <a href={'https://www.discord.gg/nukamc'}>
             NukaMC Discord Server
          </a>
        </h3>
      </div>
    );
  }
}

export default App;

import React, {Component, useEffect} from 'react';
import './VotingCard.css';
import Card from 'react-bootstrap/Card';
import Confetti from 'react-confetti';
import voting from './voting.png';

function VotingCard () {
  const [isVoting, setIsVoting] = React.useState(false)
  return (
    <div>
      <div className={'Card-Header'} as={'h5'}>
        Voting for NukaMC
        <img className={'Title-Icon'} src={voting}></img>
      </div>
      <div className={"Card"} >
        <h1 className={'Card-Title'}>Best-Minecraft-Server.com : </h1>
        <h6 className={'Card-Text'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus lacus, viverra vel justo nec, finibus pharetra odio. Etiam id turpis non sem blandit fermentum. Donec ultricies varius tellus, quis pulvinar tortor bibendum sit amet. Sed ante orci, congue eget lobortis a, scelerisque vel mi. Maecenas vestibulum elit sed mauris tristique, eget dapibus neque convallis. Donec molestie urna eget magna malesuada, eu consectetur turpis dignissim. Curabitur quam massa, imperdiet nec urna at, imperdiet pretium justo. Fusce velit orci, scelerisque in congue non, luctus eu nibh.
        </h6>
        <a href={"https://best-minecraft-servers.co/server-nukamc.17954/vote"} target={'_blank'} onClick={() => {
          setIsVoting(true)
        }}>
          <img className={'Card-Image'} src={"https://best-minecraft-servers.co/votebanner-17954-4D5988.png"}></img>
          <Confetti run={isVoting} recycle={!isVoting} numberOfPieces={300} onConfettiComplete={() => console.log('COMPLETED')}/>
        </a>
      </div>
    </div>
  )
}

export default VotingCard
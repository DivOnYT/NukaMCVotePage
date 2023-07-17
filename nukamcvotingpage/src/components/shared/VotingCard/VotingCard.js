import React, {Component, useEffect} from 'react';
import './VotingCard.css';
import Card from 'react-bootstrap/Card';
import Confetti from 'react-confetti';

function VotingCard () {
  const [isVoting, setIsVoting] = React.useState(false)
  return (
    <Card className={"Card"} border="primary" bg={'dark'} text={'white'}>
      <Card.Header as={'h5'}>Voting</Card.Header>
      <Card.Body>
        <Card.Title>Best-Minecraft-Server</Card.Title>
        <Card.Text>Salut</Card.Text>
        <Card.Link href={"https://best-minecraft-servers.co/server-nukamc.17954/vote"} target={'_blank'} onClick={() => {
          setIsVoting(true)
        }}>
          <Card.Img className={'Card-Image'} src={"https://best-minecraft-servers.co/votebanner-17954-4D5988.png"}></Card.Img>
          <Confetti run={isVoting} recycle={!isVoting} numberOfPieces={300} onConfettiComplete={() => console.log('COMPLETED')}/>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default VotingCard
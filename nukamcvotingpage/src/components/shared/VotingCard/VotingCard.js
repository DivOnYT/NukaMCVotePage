import React, {Component, useEffect} from 'react';
import './VotingCard.css';
import Confetti from 'react-confetti';
import voting from './voting.png';

const VotingCard = (data) => {
  const {title, description, voteLink, voteImage, props} = data
  const [isVoting, setIsVoting] = React.useState(false)
  return (
    <div property= {props}>
      <div className={"Card"} >
        <h1 className={'Card-Title'}>{title}</h1>
        <h6 className={'Card-Text'}>
          {description}
        </h6>
        <a href={voteLink} target={'_blank'} onClick={() => {
          setIsVoting(true)
        }}>
          <img className={'Card-Image'} src={voteImage}></img>
          {isVoting &&
            <Confetti recycle={!isVoting} numberOfPieces={500} onCompositionEnd={() => setIsVoting(false)}/>
          }
        </a>
      </div>
    </div>
  )
}

export default VotingCard
import React from 'react';
import PropTypes from 'prop-types';
import MoveHistory from '../../components/GuessWord/MoveHistory';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';

const Game = (props) => {
  let PlayArea;

  if (props.status == 'creating') {
    PlayArea = (
      <h4> Creating game... </h4>
    );
  } else if (props.status === 'finished') {
    PlayArea = (
      <h3> You won! </h3>
    );
  } else {
    PlayArea = (
      <div>
        <p> Guess a 5 letter word </p>
        <InputChangesOnSubmit onSubmit={props.onMove} type='text' />
      </div>
    );
  }
  return (
    <div className='game word-game'>
      <h2> Word Guess Game </h2>
      {PlayArea}
      <MoveHistory moves={props.moves} />
    </div>
  );
};

Game.propTypes = {
  status: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired,
  moves: PropTypes.array.isRequired
};

export default Game;

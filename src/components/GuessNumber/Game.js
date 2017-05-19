import React from 'react';
import PropTypes from 'prop-types';
import MoveHistory from '../../components/GuessNumber/MoveHistory';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';

const Game = (props) => {
  let PlayArea;
  const onMove = (move) => props.onMove(parseInt(move, 10));
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
        <p> Guess a number from 0 to 9 </p>
        <InputChangesOnSubmit onSubmit={onMove} type='number' />
      </div>
    );
  }

  return (
    <div className='game number-game'>
      <h3> Number Guess Game </h3>
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

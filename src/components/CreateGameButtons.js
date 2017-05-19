import React from 'react';

import WordGame from '../games/WordGame';
import NumberGame from '../games/NumberGame';

const CreateGameButtons = (props) => {
  const createWordGame = () => {
    const game = WordGame.generate();
    props.createGame({game: game, moves: []});
  };
  const createNumberGame = () => {
    const game = NumberGame.generate();
    props.createGame({game: game, moves: []});
  };
  return (
    <div className='create-game-buttons'>
      <button className='number-game' onClick={createNumberGame}>Create Number game</button>
      <button className='word-game' onClick={createWordGame}>Create Word game</button>
    </div>
  );
};

CreateGameButtons.propTypes = {
  createGame: React.PropTypes.func
};

export default CreateGameButtons;

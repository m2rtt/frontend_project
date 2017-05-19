import React from 'react';
import PropTypes from 'prop-types';

const GAME_TYPE_TO_NAME = {
  guess_word: 'guess word',
  guess_number: 'guess number'
};

const CreateGame = (props) => {
  const gameRequestButtons = Object.keys(GAME_TYPE_TO_NAME).map((type) =>
    <button key={type} data-game-type={type} type='submit' onClick={props.onCreateGame.bind(null, {type})}>
      Create {GAME_TYPE_TO_NAME[type]} game
    </button>
  );

  return (
    <div className='create-game'>
      <h2>Create a game!</h2>
      {gameRequestButtons}
    </div>
  );
};

CreateGame.propTypes = {
  onCreateGame: PropTypes.func.isRequired
};

export default CreateGame;

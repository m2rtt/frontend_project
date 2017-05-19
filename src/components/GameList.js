import React from 'react';
import PropTypes from 'prop-types';

import GuessWordGame from '../components/GuessWord/Game';
import GuessNumberGame from '../components/GuessNumber/Game';

const GameList = (props) => {
  const games = props.games.map((game, index) => {
    const onMove = (move) => props.onMove({move, gameId: game.id});
    if (game.type === 'guess_number') {
      return <GuessNumberGame {...game} key={index} onMove={onMove} />;
    } else if (game.type === 'guess_word') {
      return <GuessWordGame {...game} key={index} onMove={onMove} />;
    }
  });
  return (
    <div className='games'>
      {games}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GameList;

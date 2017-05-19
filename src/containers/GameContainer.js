import React from 'react';
import GuessNumber from '../components/GuessNumber/Game';
import GuessWord from '../components/GuessWord/Game';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {moveRequested} from '../actions/GameActions';

const GameOrNotFound = ({game, gameId, onMove}) => {
  if (game.type === 'guess_number') {
    return <GuessNumber {...game} onMove={onMove} />;
  } else if (game.type === 'guess_word') {
    return <GuessWord {...game} onMove={onMove} />;
  } else {
    return <p>Game {gameId} not found</p>;
  }
};
GameOrNotFound.propTypes = {
  game: PropTypes.object,
  gameId: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const gameId = ownProps.match.params.gameId;
  const game = state.games.find((game) => game.id === gameId);
  return {game, gameId: gameId};
};
const mapDispatchToProps = (dispatch) => ({
  onMove: ({move, gameId}) => dispatch(moveRequested({move, gameId}))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOrNotFound);

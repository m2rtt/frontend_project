import {
  GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  MOVE_REQUESTED,
  CREATE_MOVE_SUCCEEDED,
  CREATE_MOVE_FAILED
} from '../actions/GameActions';

const initialState = {};

export default (state=initialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case GAME_REQUESTED: {
      const {type, localId, createdAt} = payload;
      return {...state,
        [localId]: {type, id: localId, status: 'creating', createdAt, moves: []}
      };
    }

    case CREATE_GAME_SUCCEEDED: {
      const {localId, game} = payload;
      const newGame = Object.assign({}, state[localId], game);

      const newGames = {...state, [game.id]: newGame};
      delete newGames[localId];

      return newGames;
    }

    case CREATE_GAME_FAILED: {
      const {localId} = payload;
      const newGames = {...state};
      delete newGames[localId];

      return newGames;
    }

    case MOVE_REQUESTED: {
      const {localId, gameId, move} = payload;
      const currentGameState = state[gameId];
      const newMove = {move, id: localId, status: 'sending'};
      const newMoves = currentGameState.moves.concat([newMove]);

      const newGameState = {...currentGameState,
        moves: newMoves
      };

      return {...state,
        [gameId]: newGameState
      };
    }

    case CREATE_MOVE_SUCCEEDED: {
      const {localId, gameId} = payload;
      const {move, game} = payload.response;
      const currentMoves = state[gameId].moves;
      const newMoves = currentMoves.map((knownMove) => {
        if (knownMove.id == localId) {
          return Object.assign({}, knownMove, move, {status: 'sent'});
        } else {
          return knownMove;
        }
      });

      const newGame = Object.assign({}, state[gameId], game, {moves: newMoves});

      return {...state,
        [gameId]: newGame
      };
    }
    case CREATE_MOVE_FAILED: {
      const {localId, gameId} = payload;
      const currentMoves = state[gameId].moves;

      const newMoves = currentMoves.filter((knownMove) =>
          knownMove.id != localId
      );

      return {...state,
        [gameId]: {...state[gameId], moves: newMoves}
      };
    }
    default:
      return state;
  }
};

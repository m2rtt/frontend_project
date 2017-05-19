import {
  GAME_POST_REQUESTED,
  GAME_POST_SUCCEEDED,
  GAME_POST_FAILED,
  MOVE_POST_REQUESTED,
  MOVE_POST_SUCCEEDED,
  MOVE_POST_FAILED
} from '../actions/index.js';

const initialState = {
                    fetchState: {inFlight: false},
                    games: []
                  };

const gamelistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_POST_REQUESTED: {
      const fState = {inFlight: true};
      return {
        ...state,
        games: state.games.concat({
          id: action.payload.localId,
          serverId: null,
          fetchState: fState,
          game: action.payload.game,
          moves: []
        })
      };
    }
    case GAME_POST_SUCCEEDED: {
      const fState = {inFlight: false};
      console.log(state);
      return {...state,
        games: state.games.map((game) => {
          if (game.id === action.payload.localId) {
            return {...game, id: action.payload.localId, serverId: action.payload.game.id, fetchState: fState};
          } else {
            return game;
          }
        })
      };
    }
    case GAME_POST_FAILED: {
      return {...state,
        games: state.games.filter((game) =>
          game.id !== action.payload.localId
        )
      };
    }
    case MOVE_POST_REQUESTED: {
      const fState = {inFlight: true};
      console.log(state.games);
      return ({
        ...state,
        games: state.games.map((game) => game.id === action.payload.gameId ?
            {...game, moves: game.moves.concat({
              fetchState: fState,
              move: action.payload.move,
              localId: action.payload.localId
            })} : game
        )
        }
      );
    }
    case MOVE_POST_SUCCEEDED: {
      const fState = {inFlight: false};
      console.log('postsuccccc');
      console.log(state.games, action.payload);
      return ({
        ...state,
        games: state.games.map((game) => game.serverId === action.payload.moveResponse.game.id ?
            {...game, moves: game.moves.map((move) => move.localId == action.payload.localId ? ({
              move: action.payload.moveResponse.move,
              fetchState: fState
            }) : move)} : game
        )
      }
      );
    }
    case MOVE_POST_FAILED: {
      console.log(state);
      return ({
        ...state,
        games: state.games.map((game) => game.game.id === action.payload.gameId ?
            {...game, moves: game.moves.splice(0, 1)} : game
        )
      }
      );
    }
	default:
    return state;
  }
};

export default gamelistReducer;

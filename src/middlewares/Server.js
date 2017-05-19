import {
  GAME_REQUESTED,
  MOVE_REQUESTED
} from '../actions/GameActions';

import {
  createGame,
  createMove
} from '../actions/ServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
  [GAME_REQUESTED]: createGame,
  [MOVE_REQUESTED]: createMove
};

export default (store) => (next) => (action) => {
  const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
  if (serverAction) {
    serverAction(action.payload)(store.dispatch);
  }

  return next(action);
};

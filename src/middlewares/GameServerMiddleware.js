import {
  GAME_POST_REQUESTED,
  MOVE_POST_REQUESTED,
} from '../actions/index';

import {
  postMove,
  postGame
} from '../actions/GameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
  [MOVE_POST_REQUESTED]: postMove,
  [GAME_POST_REQUESTED]: postGame
};

const gameServerMiddleware = (store) => (next) => (action) => {
  const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
  if (serverAction) {
    console.log('middleware: ' + action.type);
    console.log(action.payload);
    serverAction(action.payload)(store.dispatch);
  }
  return next(action);
};

export default gameServerMiddleware;

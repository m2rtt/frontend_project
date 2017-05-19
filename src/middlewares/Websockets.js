import {
    PLAYER_CONNECT_REQUESTED,
    PLAYER_DISCONNECT_REQUESTED
} from '../actions/PlayerActions';

import {
    connectPlayer,
    disconnectPlayer
} from '../actions/WebsocketActions';

const ACTION_TYPE_TO_WEBSOCKET_ACTION = {
  [PLAYER_CONNECT_REQUESTED]: connectPlayer,
  [PLAYER_DISCONNECT_REQUESTED]: disconnectPlayer
};

export default (store) => (next) => (action) => {
  const websocketAction = ACTION_TYPE_TO_WEBSOCKET_ACTION[action.type];
  if (websocketAction) {
    websocketAction(action.payload)(store.dispatch);
  }

  return next(action);
};

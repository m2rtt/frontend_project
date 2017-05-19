const payloadForwardingAction = (type) => (payload) => ({type, payload});

export const PLAYER_CONNECT_REQUESTED = 'PLAYER_CONNECT_REQUESTED';
export const playerConnectRequested = ({name}) => {
  return {
    type: PLAYER_CONNECT_REQUESTED,
    payload: {name}
  };
};

export const PLAYER_DISCONNECT_REQUESTED = 'PLAYER_DISCONNECT_REQUESTED';
export const playerDisconnectRequested = () => {
  return {
    type: PLAYER_DISCONNECT_REQUESTED,
    payload: {}
  };
};

export const PLAYER_CONNECTED = 'PLAYER_CONNECTED';
export const playerConnected = payloadForwardingAction(PLAYER_CONNECTED);

export const PLAYER_DISCONNECTED = 'PLAYER_DISCONNECTED';
export const playerDisconnected = payloadForwardingAction(PLAYER_DISCONNECTED);

export const RECEIVED_ONLINE_PLAYERS = 'RECEIVED_ONLINE_PLAYERS';
export const receivedOnlinePlayers = payloadForwardingAction(RECEIVED_ONLINE_PLAYERS);

export const RECEIVED_PLAYER_ID = 'RECEIVED_PLAYER_ID';
export const receivedPlayerId = payloadForwardingAction(RECEIVED_PLAYER_ID);

import {
  PLAYER_CONNECT_REQUESTED,
  PLAYER_CONNECTED,
  RECEIVED_PLAYER_ID,
  RECEIVED_ONLINE_PLAYERS,
  PLAYER_DISCONNECT_REQUESTED,
  PLAYER_DISCONNECTED
} from '../actions/PlayerActions';

const initialState = {
    playerName: '',
    playerId: '',
    status: 'disconnected',
    reason: '',
    playersList: []
};

export default (state=initialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case PLAYER_CONNECT_REQUESTED: {
      const {name} = payload;
      return {...state,
        playerName: name,
        status: 'connecting'
      };
    }
    case PLAYER_DISCONNECT_REQUESTED: {
      return state;
    }
    case PLAYER_DISCONNECTED: {
      let reason = '';
      if (payload.reason)
        reason = payload.reason;
      return {
        ...initialState,
        reason: reason
      };
    }
    case PLAYER_CONNECTED: {
      return {
          ...state,
          status: 'connected'
      };
    }
    case RECEIVED_PLAYER_ID: {
        const {playerId} = payload;
        return {
            ...state,
            playerId: playerId
        };
    }
    case RECEIVED_ONLINE_PLAYERS: {
        return {
            ...state,
            playersList: payload
        };
    }

    default:
      return state;
  }
};

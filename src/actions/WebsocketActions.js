import {connect as connectWebSocket} from '../WebSocket';

import {
  playerConnected,
  playerDisconnected
} from './PlayerActions';

let webSocketConnection = null;
export const connectPlayer = ({name}) => (dispatch) => {
    const messageToAction = {
        'online-players': (playersList) => ({type: 'RECEIVED_ONLINE_PLAYERS', payload: playersList}),
        'connection:accepted': ({playerId}) => ({type: 'RECEIVED_PLAYER_ID', payload: {playerId}})
    };
    webSocketConnection = connectWebSocket({
        parameters: {playerName: name},
        onOpen: () =>
            dispatch(playerConnected()),
        onClose: (payload) =>
            dispatch(playerDisconnected(payload)),
        onMessage: ({eventName, payload}) => {
            dispatch(messageToAction[eventName](payload));
        }
    });
};
export const disconnectPlayer = () => (dispatch) => {
    if (webSocketConnection != null) {
        webSocketConnection.close();
    }
};

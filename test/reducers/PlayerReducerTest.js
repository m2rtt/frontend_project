import playerReducer from '../../src/reducers/PlayerReducer';
import {
  PLAYER_CONNECT_REQUESTED,
  PLAYER_CONNECTED,
  PLAYER_DISCONNECTED,
  RECEIVED_ONLINE_PLAYERS,
  RECEIVED_PLAYER_ID,
} from '../../src/actions/PlayerActions';

describe('PlayerReducer', () => {
  it('has initial state with status disconnected and player list empty', () => {
    const initialState = {
      playerName: '',
      playerId: '',
      status: 'disconnected',
      reason: '',
      playersList: []
    };
    expect(playerReducer(undefined, {})).to.eql(initialState);
  });

  it('adds player with "connecting" status to state if websocket connection requested', () => {
    const playerInfo = playerReducer(undefined, {
      type: PLAYER_CONNECT_REQUESTED,
      payload: {
        name: 'playername'
      }
    });

    expect(playerInfo).to.eql({
      playerName: 'playername',
      playerId: '',
      status: 'connecting',
      reason: '',
      playersList: []
    });
  });
  it('changes status to "connected" when player is connected to websocket server', () => {
    const initialState = playerReducer(undefined, {
      type: PLAYER_CONNECT_REQUESTED,
      payload: {
        name: 'name'
      }
    });

    const playerInfo = playerReducer(initialState, {
      type: PLAYER_CONNECTED,
      payload: {}
    });

    expect(playerInfo).to.eql({
      playerName: 'name',
      playerId: '',
      status: 'connected',
      reason: '',
      playersList: []
    });
  });

  it('resets playerInfo state to initial state when player disconnected', () => {
    const initialState = {
      playerName: '',
      playerId: '',
      status: 'disconnected',
      reason: '',
      playersList: []
    };
    const stateBefore = {
      playerName: 'name',
      playerId: '1234',
      status: 'connected',
      reason: '',
      playersList: [{name: 'name', id: '1234'}]
    };
    const stateAfter = playerReducer(stateBefore, {
      type: PLAYER_DISCONNECTED,
      payload: {}
    });

    expect(stateAfter).to.eql(initialState);
  });

    it('resets playerInfo and changes reason if disconnected with reason', () => {
    const initialState = {
      playerName: '',
      playerId: '',
      status: 'disconnected',
      reason: '',
      playersList: []
    };
    const stateBefore = {
      playerName: 'name',
      playerId: '1234',
      status: 'connected',
      reason: '',
      playersList: [{name: 'name', id: '1234'}]
    };
    const stateAfter = playerReducer(stateBefore, {
      type: PLAYER_DISCONNECTED,
      payload: {reason: 'this-is-reason'}
    });
    expect(stateAfter).to.eql({...initialState, reason: 'this-is-reason'});
  });

  it('updates player ID if it is received from server', () => {
    const initialState = {
        playerId: '',
        name: 'asdf',
        status: 'connected',
        reason: '',
        playersList: []
    };

    const playerInfo = playerReducer(initialState, {
      type: RECEIVED_PLAYER_ID,
      payload: {
        playerId: 'id_id'
      }
    });
    expect(playerInfo).to.eql({
        playerId: 'id_id',
        name: 'asdf',
        status: 'connected',
        reason: '',
        playersList: []
    });
  });

  it('updates players list if received from server', () => {
    const initialState = {
        playerId: 'id',
        name: 'name',
        status: 'connected',
        reason: '',
        playersList: []
    };

    const playerInfo = playerReducer(initialState, {
      type: RECEIVED_ONLINE_PLAYERS,
      payload: [
        {name: 'sas', id: '123'},
        {name: 'name', id: 'id'}
      ]
    });
    expect(playerInfo).to.eql({
        playerId: 'id',
        name: 'name',
        status: 'connected',
        reason: '',
        playersList: [
          {name: 'sas', id: '123'},
          {name: 'name', id: 'id'}
        ]
    });
  });
});

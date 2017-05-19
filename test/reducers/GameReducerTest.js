import gameReducer from '../../src/reducers/GameReducer';
import {
  GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  MOVE_REQUESTED,
  CREATE_MOVE_SUCCEEDED,
  CREATE_MOVE_FAILED
} from '../../src/actions/GameActions';

describe('GameReducer', () => {
  it('has no games initially', () => {
    expect(gameReducer(undefined, {})).to.eql({});
  });

  it('adds game with "creating" status to games if game requested', () => {
    const createdAt = Date.now();

    const games = gameReducer(undefined, {
      type: GAME_REQUESTED,
      payload: {
        type: 'guess_number',
        localId: 'local-id',
        createdAt: createdAt
      }
    });

    expect(games).to.eql({
      'local-id': {
        type: 'guess_number',
        id: 'local-id',
        status: 'creating',
        createdAt: createdAt,
        moves: []
      }
    });
  });

  it('updates game when create game succeeded', () => {
    const createdAt = Date.now();

    const initialState = gameReducer(undefined, {
      type: GAME_REQUESTED,
      payload: {
        type: 'guess_number',
        localId: 'local-id',
        createdAt: createdAt
      }
    });

    const games = gameReducer(initialState, {
      type: CREATE_GAME_SUCCEEDED,
      payload: {
        localId: 'local-id', game: {id: 'id', type: 'guess_number', status: 'waiting_for_move'}
      }
    });

    expect(games).to.eql({
      'id': {
        type: 'guess_number',
        id: 'id',
        status: 'waiting_for_move',
        createdAt: createdAt,
        moves: []
      }
    });
  });

  it('removes game when create game failed', () => {
    const initialState = gameReducer(undefined, {
      type: GAME_REQUESTED,
      payload: {
        type: 'guess_number',
        localId: 'local-id',
        createdAt: Date.now()
      }
    });

    const games = gameReducer(initialState, {
      type: CREATE_GAME_FAILED,
      payload: {localId: 'local-id'}
    });

    expect(games).to.eql({});
  });

  it('adds move to game if move requested', () => {
    const initialState = {
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'waiting_for_move',
        target: 5,
        moves: []
      }
    };

    const games = gameReducer(initialState, {
      type: MOVE_REQUESTED,
      payload: {
        localId: 'local-move-id',
        gameId: 'game-id',
        move: 5
      }
    });
    expect(games).to.eql({
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'waiting_for_move',
        target: 5,
        moves: [
          {id: 'local-move-id', move: 5, status: 'sending'}
        ]
      }
    });
  });

  it('updates move to be sent and game when create move succeeded', () => {
    const initialState = {
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'waiting_for_move',
        target: 5,
        moves: [
          {id: 'local-move-id', move: 5, status: 'sending'}
        ]
      }
    };

    const games = gameReducer(initialState, {
      type: CREATE_MOVE_SUCCEEDED,
      payload: {
        localId: 'local-move-id',
        gameId: 'game-id',
        response: {
          move: {comparedToAnswer: 'EQ'},
          game: {
            status: 'finished'
          }
        },
      }
    });
    expect(games).to.eql({
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'finished',
        target: 5,
        moves: [
          {id: 'local-move-id', move: 5, comparedToAnswer: 'EQ', status: 'sent'}
        ]
      }
    });
  });

  it('removes move when create move failed', () => {
    const initialState = {
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'waiting_for_move',
        target: 5,
        moves: [
          {id: 'local-move-id', move: 5, status: 'sending'}
        ]
      }
    };

    const games = gameReducer(initialState, {
      type: CREATE_MOVE_FAILED,
      payload: {
        localId: 'local-move-id',
        gameId: 'game-id',
      }
    });
    expect(games).to.eql({
      'game-id': {
        id: 'game-id',
        type: 'guess_number',
        status: 'waiting_for_move',
        target: 5,
        moves: []
      }
    });
  });
});

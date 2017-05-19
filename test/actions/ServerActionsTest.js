import {
  createGame,
  createMove
} from '../../src/actions/ServerActions';

import {
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  CREATE_MOVE_SUCCEEDED,
  CREATE_MOVE_FAILED
} from '../../src/actions/GameActions';

describe('ServerActions', () => {
  let xhr;
  let requests;
  let dispatch;

  beforeEach(() => {
    // Mock out XMLHttpRequest with sinon
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    // Store XMLHttpRequests to respond to them
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr);
    dispatch = sinon.stub();
  });

  afterEach(() => {
    xhr.restore();
  });

  describe('createGame', () => {
    it('dispatches CREATE_GAME_SUCCEEDED when create game xhr succeeds', () => {
      createGame({localId: 'local-id', type: 'guess_number'})(dispatch);
      const createdGame = {id: 'game-id'};

      // Pending request succeeds
      requests[0].respond(201, {}, JSON.stringify(createdGame));

      expect(dispatch).to.have.been.calledWith({
        type: CREATE_GAME_SUCCEEDED,
        payload: {localId: 'local-id', game: createdGame}
      });
    });

    it('dispatches CREATE_GAME_FAILED when xhr fails', () => {
      createGame({localId: 'local-id', type: 'guess_number'})(dispatch);

      // Fails the pending request
      requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

      expect(dispatch).to.have.been.calledWith({
        type: CREATE_GAME_FAILED,
        payload: {localId: 'local-id', error: 'error'}
      });
    });
  });

  describe('createMove', () => {
    it('dispatches CREATE_MOVE_SUCCEEDED when xhr succeeds', () => {
      const arbitraryMove = 5;
      createMove({localId: 'local-id', gameId: 'game-id', move: arbitraryMove})(dispatch);
      const createdMove = {comparedToAnser: 'EQ'};

      // Pending request succeeds
      requests[0].respond(201, {}, JSON.stringify(createdMove));

      expect(dispatch).to.have.been.calledWith({
        type: CREATE_MOVE_SUCCEEDED,
        payload: {localId: 'local-id', gameId: 'game-id', response: createdMove}
      });
    });

    it('dispatches CREATE_GAME_FAILED when xhr succeeds', () => {
      const arbitraryMove = 5;
      createMove({localId: 'local-id', gameId: 'game-id', move: arbitraryMove})(dispatch);

      // Fails the pending request
      requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

      expect(dispatch).to.have.been.calledWith({
        type: CREATE_MOVE_FAILED,
        payload: {localId: 'local-id', gameId: 'game-id', error: 'error'}
      });
    });
  });
});

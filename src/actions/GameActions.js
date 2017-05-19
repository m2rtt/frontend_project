const payloadForwardingAction = (type) => (payload) => ({type, payload});

let gameCounter = 0;
export const GAME_REQUESTED = 'GAME_REQUESTED';
export const gameRequested = ({type}) => {
  gameCounter += 1;
  const localId = gameCounter;
  const createdAt = Date.now();

  return {
    type: GAME_REQUESTED,
    payload: {type, localId, createdAt}
  };
};

export const CREATE_GAME_SUCCEEDED = 'CREATE_GAME_SUCCEEDED';
export const createGameSucceeded = payloadForwardingAction(CREATE_GAME_SUCCEEDED);

export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const createGameFailed = payloadForwardingAction(CREATE_GAME_FAILED);

let moveCounter = 0;
export const MOVE_REQUESTED = 'MOVE_REQUESTED';
export const moveRequested = ({gameId, move}) => {
  moveCounter += 1;
  const localId = moveCounter;

  return {
    type: MOVE_REQUESTED,
    payload: {localId, gameId, move}
  };
};

export const CREATE_MOVE_SUCCEEDED = 'CREATE_MOVE_SUCCEEDED';
export const createMoveSucceeded = payloadForwardingAction(CREATE_MOVE_SUCCEEDED);

export const CREATE_MOVE_FAILED = 'CREATE_MOVE_FAILED';
export const createMoveFailed = payloadForwardingAction(CREATE_MOVE_FAILED);

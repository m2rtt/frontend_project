const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

// Action creators can have side-effects
let nextId = 1;
let nextMoveId = 1;
// Export action type constants for reducers to use

export const GAME_POST_REQUESTED = 'GAME_POST_REQUESTED';
export const gamePostRequested = ({game, moves}) => {
    return {
        type: GAME_POST_REQUESTED,
        payload: {
            localId: nextId++,
            game: game,
            moves: moves
        }
    };
};
export const MOVE_POST_REQUESTED = 'MOVE_POST_REQUESTED';
export const movePostRequested = ({move, gameId, gameServerId}) => {
    return {
        type: MOVE_POST_REQUESTED,
        payload: {
            gameId: gameId,
            serverId: gameServerId,
            move: move,
            localId: nextMoveId++
        }
    };
};

export const GAME_POST_SUCCEEDED = 'GAME_POST_SUCCEEDED';
export const gamePostSucceeded = createPayloadForwardingAction(GAME_POST_SUCCEEDED);

export const GAME_POST_FAILED = 'GAME_POST_FAILED';
export const gamePostFailed = createPayloadForwardingAction(GAME_POST_FAILED);

export const MOVE_POST_SUCCEEDED = 'MOVE_POST_SUCCEEDED';
export const movePostSucceeded = createPayloadForwardingAction(MOVE_POST_SUCCEEDED);

export const MOVE_POST_FAILED = 'MOVE_POST_FAILED';
export const movePostFailed = createPayloadForwardingAction(MOVE_POST_FAILED);

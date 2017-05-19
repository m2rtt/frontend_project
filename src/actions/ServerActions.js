import jsonAjax from '../JSONAjaxRequest';

import {
  createGameSucceeded,
  createGameFailed,
  createMoveSucceeded,
  createMoveFailed
} from './GameActions';

const SERVER_ADDRESS = 'http://localhost:8081';

export const createGame = ({localId, type}) => (dispatch) => {
  jsonAjax(
    SERVER_ADDRESS + '/games',
    'POST', {type}, (game) => dispatch(createGameSucceeded({localId, game})),
    ({error} = {}) => dispatch(createGameFailed({localId, error}))
  );
};

export const createMove = ({localId, gameId, move}) => (dispatch) => {
  jsonAjax(
    SERVER_ADDRESS + '/games/' + gameId + '/moves',
    'POST',
    {guess: move},
    (response) => dispatch(createMoveSucceeded({localId, gameId, response})),
    ({error} = {}) => dispatch(createMoveFailed({localId, gameId, error}))
  );
};

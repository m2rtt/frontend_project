import jsonAjax from '../JSONAjaxRequest';

import {
  gamePostSucceeded,
  gamePostFailed,
  movePostSucceeded,
  movePostFailed
} from './index';

const SERVER_ADDRESS = 'http://localhost:8081';

export const postMove = ({gameId, move, serverId, localId}) => (dispatch) => {
    jsonAjax(
      SERVER_ADDRESS + '/games/' + serverId + '/moves',
      'POST',
      {guess: move.guess},
      (moveResponse) => {
        console.log('Got move response', gameId, moveResponse);
        dispatch(movePostSucceeded({moveResponse, localId}));
      },
      (error) => {
        console.log('Failed to create number game move', error);
        dispatch(movePostFailed({error, localId}));
      }
    );
};
export const postGame = ({localId, game}) => (dispatch) => {
    const gameType = game.getType() == 'word-game' ? 'guess_word' :
     game.getType() == 'number-game' ? 'guess_number' : 'unknown';
    jsonAjax(
        SERVER_ADDRESS + '/games',
        'POST',
        {type: gameType},
        (game) => {
            console.log(gameType + ' created', game);
            dispatch(gamePostSucceeded({localId, game}));
        },
        (error) => {
            console.log('Failed to create ', error);
            console.log(gameType);
            dispatch(gamePostFailed({localId, error}));
        }
    );
};

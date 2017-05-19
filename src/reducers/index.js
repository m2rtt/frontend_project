import {combineReducers} from 'redux';
import GameReducer from './GameReducer';
import PlayerReducer from './PlayerReducer';

export default combineReducers({
  games: GameReducer,
  playerInfo: PlayerReducer
});

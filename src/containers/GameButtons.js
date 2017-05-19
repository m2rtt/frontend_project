import {connect} from 'react-redux';
import {gamePostRequested} from '../actions';

import CreateGameButtons from '../components/CreateGameButtons';

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: ({game, moves}) => dispatch(gamePostRequested({game, moves}))
  };
};

export default connect(undefined, mapDispatchToProps)(CreateGameButtons);

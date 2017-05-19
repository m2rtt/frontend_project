import {connect} from 'react-redux';
import {movePostRequested} from '../../actions';
import Game from '../../components/GuessNumber/Game';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({move, gameId, gameServerId}) => dispatch(movePostRequested({move, gameId, gameServerId}))
  };
};

export default connect(undefined, mapDispatchToProps)(Game);

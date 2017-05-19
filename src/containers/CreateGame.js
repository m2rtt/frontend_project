import {connect} from 'react-redux';
import CreateGame from '../components/CreateGame';
import {push} from 'connected-react-router';
import {gameRequested} from '../actions/GameActions';

const mapDispatchToProps = (dispatch) => ({
  onCreateGame: ({type}) => {
    dispatch(gameRequested({type}));
    dispatch(push('/ongoingGames'));
  }
});

export default connect(undefined, mapDispatchToProps)(CreateGame);

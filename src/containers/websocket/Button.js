import {connect} from 'react-redux';
import Button from '../../components/websocket/Button';

import {playerConnectRequested, playerDisconnectRequested} from '../../actions/PlayerActions';
import {push} from 'connected-react-router';

const mapDispatchToProps = (dispatch) => ({
  onConnectPlayer: ({name}) => {
    dispatch(push('/createGame'));
    dispatch(playerConnectRequested({name}));
  },
  onDisconnectPlayer: () => dispatch(playerDisconnectRequested())
});

const mapStateToProps = (state) => ({
  playerInfo: state.playerInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);

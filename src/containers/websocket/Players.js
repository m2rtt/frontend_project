import {connect} from 'react-redux';
import Players from '../../components/websocket/Players';

const mapStateToProps = (state) => ({
  playerInfo: state.playerInfo
});

export default connect(mapStateToProps)(Players);

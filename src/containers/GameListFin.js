import {connect} from 'react-redux';
import GameListFinished from '../components/GameList';

import {moveRequested} from '../actions/GameActions';

const mapStateToProps = (state) => ({
  games: Object.values(state.games).sort(
          (game1, game2) => game1.createdAt - game2.createdAt
        ).filter((game) => game.status === 'finished')
});

const mapDispatchToProps = (dispatch) => ({
  onMove: ({move, gameId}) => dispatch(moveRequested({move, gameId}))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameListFinished);

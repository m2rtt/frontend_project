import React from 'react';

// import WebsocketConnection from './WebsocketConnection';
import {Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import PropTypes from 'prop-types';
import WebsocketButton from './websocket/Button';
import WebsocketPlayerList from './websocket/Players';
import CreateGame from './CreateGame';
import GameContainer from './GameContainer';
import GameList from './GameList';
import GameListFinished from './GameListFin';
import {connect} from 'react-redux';

const App = (props) => {
    let Connected;
    if (props.playerInfo.status == 'connected') {
      Connected = (
            <div>
              <div>
                <Link to={`/createGame`}><p>Create </p></Link>
                <Link to={`/players`}><p>Player list</p></Link>
                <Link to={`/ongoingGames`}><p>Ongoing games</p></Link>
                <Link to={`/finishedGames`}><p>Finished games</p></Link>
              </div>
                <WebsocketButton />
                <Route path='/createGame' component={CreateGame} />
                <Route path='/players' component={WebsocketPlayerList} />
                <Route path='/ongoingGames' component={GameList} />
                <Route path='/finishedGames' component={GameListFinished} />
                <Route path='/games/:gameId' component={GameContainer} />
            </div>
        );
    } else {
         Connected = (
            <div>
                <WebsocketButton />
            </div>
        );
    }
  return (
    <ConnectedRouter history={props.history}>
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      {Connected}
    </div>
    </ConnectedRouter>
  );
};
App.propTypes = {
  history: PropTypes.object.isRequired,
  playerInfo: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  playerInfo: state.playerInfo
});
export default connect(mapStateToProps, undefined)(App);

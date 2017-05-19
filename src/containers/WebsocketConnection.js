import React from 'react';
import PropTypes from 'prop-types';
import WebsocketButton from './websocket/Button';
import WebsocketPlayerList from './websocket/Players';
import CreateGame from './CreateGame';
import GameContainer from './GameContainer';
import GameList from './GameList';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

const WebsocketConnection = (props) => {
    if (props.playerInfo.status == 'connected') {
        return (
            <ConnectedRouter history={props.history}>
            <div>
                <WebsocketButton />
                <Route path="/createGame" component={CreateGame} />
                <Route path="/players" component={WebsocketPlayerList} />
                <Route path="/ongoingGames" component={GameList} />
                <Route path="/finishedGames" component={GameList} />
                <Route path="/games/:gameId" component={GameContainer} />
            </div>
            </ConnectedRouter>
        );
    } else {
         return (
            <div>
                <WebsocketButton />
            </div>
        );
    }
};

WebsocketConnection.propTypes = {
  playerInfo: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  playerInfo: state.playerInfo
});

export default connect(mapStateToProps, undefined)(WebsocketConnection);

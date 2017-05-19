import GameList from '../components/GameList';
// import WordGameComponent from './GuessWord/Game';
import {connect} from 'react-redux';
// import React from 'react';

const mapStateToProps = (state) => (console.log(state), {
    games: state.games.games,
    fetchState: state.games.fetchState
});

// If there are no callback props to create, `mapDispatchToProps` can be
// omitted.
export default connect(mapStateToProps, undefined)(GameList);

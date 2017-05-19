import React from 'react';
import PropTypes from 'prop-types';


const Players = (props) => {
  let players = [];
  if(props.playerInfo.playersList) {
    players = props.playerInfo.playersList.map((player, index) => {
      if (player.id === props.playerInfo.playerId) {
        return <h3 key={index}>{player.name} (you)</h3>;
      } else {
        return <h3 key={index}>{player.name}</h3>;
      }
    });
  }
  return (
    <div className='players-list'>
      {players}
    </div>
  );
};

Players.propTypes = {
  playerInfo: PropTypes.object.isRequired
};

export default Players;

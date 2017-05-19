import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

const MoveHistory = ({moves}) => {
  const moveHistory = moves.map((move, index) =>
    <Move
      move={move.move}
      comparedToAnswer={move.comparedToAnswer}
      key={index}
      status={move.status}
    />
  );

  if (moveHistory.length === 0) {
    return (<div className='move-history'/>);
  } else {
    return (
      <div className='move-history'>
        <p>Previous moves:</p>
        <div className='move-list'>
          {moveHistory}
        </div>
      </div>
    );
  }
};

MoveHistory.propTypes = {
  moves: PropTypes.array.isRequired
};

export default MoveHistory;

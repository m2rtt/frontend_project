import React from 'react';
import PropTypes from 'prop-types';
import Letter from './Letter';

const Move = ({move, letterMatches, correct, status}) => {
  if (status === 'sending') {
    return (<p>Sending move</p>);
  }
  const resultClass = correct ? 'correct' : 'incorrect';
  const letters = letterMatches.map((correct, index) => {
    const letter = move[index];
    return <Letter key={index} letter={letter} correct={correct} />;
  });

  return (
    <div className={'move ' + resultClass}>
        {letters}
    </div>
  );
};

Move.propTypes = {
  move: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  letterMatches: PropTypes.array,
  correct: PropTypes.bool
};

export default Move;

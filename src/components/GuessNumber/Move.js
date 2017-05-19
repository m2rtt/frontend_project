import React from 'react';
import PropTypes from 'prop-types';

const COMPARISON_TO_DESCRIPTION = {
  EQ: 'correct',
  LT: 'smaller than target',
  GT: 'greater than target'
};

const Move = ({status, move, comparedToAnswer}) => {
  if (status === 'sending') {
    return (<p>Sending move</p>);
  }
  const resultClass = comparedToAnswer == 'EQ' ? 'correct' : 'incorrect';

  return (
    <div className={'move ' + resultClass}>
      <i>{move}</i>: was {COMPARISON_TO_DESCRIPTION[comparedToAnswer]}
    </div>
  );
};

Move.propTypes = {
  move: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  comparedToAnswer: PropTypes.string,
};

export default Move;

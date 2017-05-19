import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({letter, correct}) => {
  const resultClass = correct ? 'correct' : 'incorrect';

  return (
    <span className={'letter ' + resultClass}>
      {letter}
    </span>
  );
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired
};

export default Letter;

import React from 'react';
import {shallow} from 'enzyme';

import MoveHistory from '../../../src/components/GuessWord/MoveHistory';
import Move from '../../../src/components/GuessWord/Move';

describe('GuessWord/MoveHistory', () => {
  it('renders no moves when empty moves', () => {
    const result = shallow(<MoveHistory moves={[]} />);
    expect(result).not.to.have.descendants(Move);
  });

  it('renders moves when there are some', () => {
    const result = shallow(
      <MoveHistory moves={[
        {move: 'fq', correct: false, letterMatches: [['f', false], ['q', true]]},
        {move: 'eq', correct: true, letterMatches: [['e', true], ['q', true]]}
      ]}
    />);
    expect(result).to.have.exactly(2).descendants(Move);
  });
});

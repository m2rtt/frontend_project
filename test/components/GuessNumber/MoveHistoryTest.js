import React from 'react';
import {shallow} from 'enzyme';

import MoveHistory from '../../../src/components/GuessNumber/MoveHistory';
import Move from '../../../src/components/GuessNumber/Move';

describe('GuessNumber/MoveHistory', () => {
  it('renders no moves when empty moves', () => {
    const result = shallow(<MoveHistory moves={[]} />);
    expect(result).not.to.have.descendants(Move);
  });

  it('renders moves when there are some', () => {
    const result = shallow(
      <MoveHistory moves={[
        {move: 5, comparedToAnswer: 'GT'},
        {move: 3, comparedToAnswer: 'EQ'},
      ]}
    />);
    expect(result).to.have.exactly(2).descendants(Move);
  });
});

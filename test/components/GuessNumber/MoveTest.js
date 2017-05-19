import React from 'react';
import {shallow} from 'enzyme';

import Move from '../../../src/components/GuessNumber/Move';

describe('GuessNumber/Move', () => {
  it('shows "Sending move" when move status is sending', () => {
    expect(shallow(<Move move={5} status='sending'/>).text())
      .to.contain('Sending move');
  });

  it('has correct class when guess was correct', () => {
    const result = shallow(<Move move={5} comparedToAnswer='EQ' status='sent' />);
    expect(result.props().className).to.eq('move correct');
  });

  it('has incorrect class when guess was incorrect', () => {
    const result = shallow(<Move move={5} comparedToAnswer='LT' status='sent' />);
    expect(result.props().className).to.eq('move incorrect');
  });
});

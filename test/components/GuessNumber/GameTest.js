import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/components/GuessNumber/Game';

describe('GuessNumber/Game', () => {
  it('shows "Creating game..." when game status is creating', () => {
    const result = shallow(<Game status='creating' onMove={sinon.stub()} moves={[]} />);
    expect(result.text()).to.contain('Creating game...');
  });

  it('shows you won when game finished', () => {
    const result = shallow(<Game status='finished' onMove={sinon.stub()} moves={[]} />);
    expect(result.text()).to.contain('You won!');
  });

  it('shows play area when game not finished', () => {
    const result = shallow(<Game status='waiting_for_move' onMove={sinon.stub()} moves={[]} />);
    expect(result.text()).to.contain('Guess a number');
  });
});

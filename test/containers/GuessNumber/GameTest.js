import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/components/GuessNumber/Game';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import NumberGame from '../../../src/games/NumberGame';

describe('GuessNumber/Game', () => {
  let numberGame;
  beforeEach(() => {
    numberGame = new NumberGame({targetNumber: 5, upperBound: 10, lowerBound: 0});
  });

  it('initially has input', () => {
    const result = shallow(<Game game={numberGame} />);
    expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
  });
});

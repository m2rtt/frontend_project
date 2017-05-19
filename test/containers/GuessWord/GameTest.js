import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/components/GuessWord/Game';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import WordGame from '../../../src/games/WordGame';

describe('GuessWord/Game', () => {
  let wordGame;
  beforeEach(() => {
    wordGame = new WordGame('paper');
  });

  it('initially has input', () => {
    const result = shallow(<Game game={wordGame} />);
    expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
  });
});

import React from 'react';
import {shallow} from 'enzyme';

import GameList from '../../src/components/GameList';
import GuessWordGame from '../../src/components/GuessWord/Game';
import GuessNumberGame from '../../src/components/GuessNumber/Game';

describe('GameList', () => {
  it('has no games when empty games in props', () => {
    const result = shallow(<GameList games={[]} />);
    expect(result).to.not.have.descendants(GuessWordGame);
    expect(result).to.not.have.descendants(GuessNumberGame);
  });

  it('has number game when number games in props', () => {
    const result = shallow(<GameList games={[
      {id: 'id', type: 'guess_number', status: 'waiting_for_move', moves: []}
    ]} />);
    expect(result).to.have.exactly(1).descendants(GuessNumberGame);
  });

  it('has word game when number games in props', () => {
    const result = shallow(<GameList games={[
      {id: 'id', type: 'guess_word', status: 'waiting_for_move', moves: []}
    ]} />);
    expect(result).to.have.exactly(1).descendants(GuessWordGame);
  });
});

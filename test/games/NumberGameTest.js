import NumberGame from '../../src/games/NumberGame';

describe('GuessNumber', () => {
  it('reports GT for guess greater than target', () => {
    const {move, game} = NumberGame.guess({move: 6, target: 5});
    expect(move).to.eql({comparedToAnswer: 'GT', move: 6});
    expect(game.status).to.eql('waiting_for_move');
  });

  it('reports LT for guess lower than target', () => {
    const {move, game} = NumberGame.guess({move: 4, target: 5});
    expect(move).to.eql({comparedToAnswer: 'LT', move: 4});
    expect(game.status).to.eql('waiting_for_move');
  });

  it('reports EQ for guess equal to target', () => {
    const {move, game} = NumberGame.guess({move: 5, target: 5});
    expect(move).to.eql({comparedToAnswer: 'EQ', move: 5});
    expect(game.status).to.eql('finished');
  });
});

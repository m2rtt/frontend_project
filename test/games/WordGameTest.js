import WordGame from '../../src/games/WordGame';

describe('GuessWord', () => {
  it('reports correct letters but incorrect guess for substring guess', () => {
    const {move, game} = WordGame.guess({move: 'pape', target: 'paper'});
    expect(move).to.eql({
      move: 'pape',
      correct: false,
      letterMatches: [['p', true], ['a', true], ['p', true], ['e', true]]
    });
    expect(game.status).to.eql('waiting_for_move');
  });

  it('reports correct letters but incorrect guess for superstring guess', () => {
    const {move, game} = WordGame.guess({move: 'paperboy', target: 'paper'});
    expect(move).to.eql({
      correct: false,
      move: 'paperboy',
      letterMatches: [['p', true], ['a', true], ['p', true], ['e', true], ['r', true],
        ['b', false], ['o', false], ['y', false]]
    });
    expect(game.status).to.eql('waiting_for_move');
  });

  it('reports incorrect letters and incorrect guess for incorrect guess', () => {
    const {move, game} = WordGame.guess({move: 'vinyl', target: 'paper'});
    expect(move).to.eql({
      correct: false,
      move: 'vinyl',
      letterMatches: [['v', false], ['i', false], ['n', false], ['y', false], ['l', false]]
    });
    expect(game.status).to.eql('waiting_for_move');
  });

  it('reports correct letters and guess for correct guess', () => {
    const {move, game} = WordGame.guess({move: 'paper', target: 'paper'});
    expect(move).to.eql({
      move: 'paper',
      correct: true,
      letterMatches: [['p', true], ['a', true], ['p', true], ['e', true], ['r', true]]
    });
    expect(game.status).to.eql('finished');
  });
});

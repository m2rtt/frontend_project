import reducer from '../../src/reducers/GamesListReducer';
import NumberGame from '../../src/games/NumberGame';
import WordGame from '../../src/games/WordGame';

import {
  gameAdded,
  moveSubmitted
} from '../../src/actions/index';

// Note that reducer tests have nothing to do with React.

describe('GamesListReducer', () => {
  it('has no games initially', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('adds correct game when game button clicked', () => {
    const numberG = NumberGame.generate();
    const wordG = WordGame.generate();
    const firstGame = {id: 0, game: wordG, moves: []};
    const secondGame = {id: 1, game: numberG, moves: []};

    const stateAfterFirst = reducer(undefined, gameAdded(firstGame));
    // Previous state can be passed to the reducer
    const stateAfterSecond = reducer(stateAfterFirst, gameAdded(secondGame));
    expect(stateAfterSecond.length).to.eq(2);

    expect(stateAfterSecond[0].game.getType()).to.eq(WordGame.type);
    expect(stateAfterSecond[1].game.getType()).to.eq(NumberGame.type);
  });

  it('adds moves to correct game when move is made', () => {
    const numberG = NumberGame.generate();
    const wordG = WordGame.generate();
    const firstGame = {id: 0, game: wordG, moves: []};
    const secondGame = {id: 1, game: numberG, moves: []};

    const stateAfterFirst = reducer(undefined, gameAdded(firstGame));
    // Previous state can be passed to the reducer
    const stateAfterSecond = reducer(stateAfterFirst, gameAdded(secondGame));
    expect(stateAfterSecond[0].moves.length).to.eq(0);
    const stateAfterNewMove = reducer(stateAfterSecond, moveSubmitted({gameId: stateAfterSecond[0].id, move: {}}));
    expect(stateAfterNewMove.length).to.eq(2);
    expect(stateAfterNewMove[0].moves.length).to.eq(1);

    expect(stateAfterNewMove[0].game.getType()).to.eq(WordGame.type);
    expect(stateAfterNewMove[1].game.getType()).to.eq(NumberGame.type);
  });
});


import {gameAdded} from '../../src/actions/index';

describe('gameAdded', () => {
  it('has increasing game ID', () => {
    const submissions = [
      gameAdded({game: null, moves: null}),
      gameAdded({game: null, moves: null})
    ];
    expect(submissions[1].payload.id).to.eq(
      submissions[0].payload.id + 1
    );
  });
});

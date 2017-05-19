const GAME_TYPE = 'number-game';

class NumberGame {
  static generateTarget() {
    const upperBound = 9;
    return Math.floor(Math.random() * (upperBound + 1));
  }

  static guess({move, target}) {
    if (move == target) {
      return {
        move: {comparedToAnswer: 'EQ', move: move},
        game: {status: 'finished', type: GAME_TYPE}
      };
    } else if (move > target) {
      return {
        move: {comparedToAnswer: 'GT', move: move},
        game: {status: 'waiting_for_move', type: GAME_TYPE}
      };
    } else {
      return {
        move: {comparedToAnswer: 'LT', move: move},
        game: {status: 'waiting_for_move', type: GAME_TYPE}
      };
    }
  }
}

export default NumberGame;

const candidateWords = [
  'paper',
  'grill',
  'basil',
  'hinge',
  'ruler'
];

const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const GAME_TYPE = 'word-game';

class WordGame {
  static generateTarget() {
    return selectRandom(candidateWords);
  }

  static guess({move, target}) {
    const letterMatches = [];

    for(let i = 0; i < move.length; i += 1) {
      const guessLetter = move.charAt(i);
      const correct = guessLetter === target.charAt(i);
      letterMatches.push([guessLetter, correct]);
    }

    const correct = move === target;

    return {
      move: {
        correct: correct,
        letterMatches: letterMatches,
        move: move
      },
      game: {
        status: correct ? 'finished' : 'waiting_for_move',
        type: GAME_TYPE
      }
    };
  }
}

export default WordGame;

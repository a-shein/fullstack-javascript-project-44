import { getRandomInRange, askSimpleQuestion } from '../utils.js';
import gameEngine from '../game-process.js';

function isParityNumber(number) {
  return number % 2 === 0;
}

function evenGameRoundGenerator() {
  const min = 1;
  const max = 20;
  const number = getRandomInRange(min, max);
  const question = askSimpleQuestion(number);
  const correctAnswer = isParityNumber(number) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(condition, evenGameRoundGenerator);

export default evenGameRoundGenerator;

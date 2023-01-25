import { getRandomInRange } from '../utils.js';
import gameEngine from '../game-process.js';

function askSimpleQuestion(number) {
  return `Question: ${number}`;
}

function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }

  let i = 2;

  while (i < number) {
    if (number % i === 0) {
      return false;
    }

    i += 1;
  }
  return true;
}

function primeGameRoundGenerator() {
  const minNumber = 2;
  const maxNumber = 20;
  const number = getRandomInRange(minNumber, maxNumber);
  const question = askSimpleQuestion(number);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameEngine(condition, primeGameRoundGenerator);

export default primeGameRoundGenerator;

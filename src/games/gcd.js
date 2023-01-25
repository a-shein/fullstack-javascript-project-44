import { getRandomInRange } from '../utils.js';
import gameEngine from '../game-process.js';

function askQuestion(number, secondNumber) {
  return `Question: ${number} ${secondNumber}`;
}

function getNod(number, secondNumber) {
  if (secondNumber > number) return getNod(secondNumber, number);
  if (!secondNumber) return number;
  return getNod(secondNumber, number % secondNumber);
}

function gcdGameRoundGenerator() {
  const minNumber = 1;
  const maxNumber = 20;
  const number = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const question = askQuestion(number, secondNumber);
  const correctAnswer = String(getNod(number, secondNumber));

  return [question, correctAnswer];
}

const condition = 'Find the greatest common divisor of given numbers.';
gameEngine(condition, gcdGameRoundGenerator);

export default gcdGameRoundGenerator;

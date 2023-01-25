import { getRandomInRange } from '../utils.js';
import gameEngine from '../game-process.js';

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
}

function askQuestion(number, secondNumber, operator) {
  return `Question: ${number} ${operator} ${secondNumber}`;
}

function calculate(number, secondNumber, operator) {
  let result = 0;
  switch (operator) {
    case '-':
      result = number - secondNumber;
      break;
    case '+':
      result = number + secondNumber;
      break;
    case '*':
      result = number * secondNumber;
      break;
    default:
      break;
  }

  return result;
}

function calcGameRoundGenerator() {
  const minNumber = 1;
  const maxNumber = 20;
  const number = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const operator = generateOperator();
  const question = askQuestion(number, secondNumber, operator);
  const correctAnswer = String(calculate(number, secondNumber, operator));

  return [question, correctAnswer];
}
const condition = 'What is the result of the expression?';
gameEngine(condition, calcGameRoundGenerator);

export default calcGameRoundGenerator;

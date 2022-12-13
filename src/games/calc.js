import {
  congratulationToUser,
  correctResultMessage,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  generateTool,
  gameCounter,
} from '../index.js';

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
}

function askQuestion(number, secondNumber, operator) {
  const question = `Question: ${number} ${operator} ${secondNumber}`;
  console.log(question);
  return question;
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

function checkAnswer(answer, number, secondNumber, operator) {
  const result = calculate(number, secondNumber, operator);

  return Number(answer) === result;
}

function selectRightResultOfExpressionGame() {
  const gameName = 'brain-calc';
  const minNumber = 1;
  const maxNumber = 20;
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const number = generateTool(minNumber, maxNumber);
    const secondNumber = generateTool(minNumber, maxNumber);
    const operator = generateOperator();
    const question = askQuestion(number, secondNumber, operator);
    const answer = setAnswer();
    const correctAnswer = calculate(number, secondNumber, operator);

    if (checkAnswer(answer, number, secondNumber, operator)) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default selectRightResultOfExpressionGame;

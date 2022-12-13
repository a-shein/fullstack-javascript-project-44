import {
  congratulationToUser,
  correctResultMessage,
  generateNumber,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  gameCounter
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

function negativeAnswerToUser(answer, userName, number, secondNumber, operator, question) {
  const correctAnswer = calculate(number, secondNumber, operator);
  incorrectResultMessage(correctAnswer, answer, userName, question);
}

function selectRightResultOfExpressionGame() {
  const gameName = 'brain-calc';
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    let result = null;
    const number = generateNumber();
    const secondNumber = generateNumber();
    const operator = generateOperator();
    const question = askQuestion(number, secondNumber, operator);
    const answer = setAnswer();
    result = checkAnswer(answer, number, secondNumber, operator);

    if (result) {
      correctResultMessage();
      counter += 1;
    } else {
      return negativeAnswerToUser(
        answer,
        userName,
        number,
        secondNumber,
        operator,
        question,
      );
    }
  }

  return congratulationToUser(userName);
}

export default selectRightResultOfExpressionGame;

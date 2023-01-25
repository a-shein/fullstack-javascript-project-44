import {
  correctResultMessage,
  greetings,
  setAnswer,
  setCondition,
  incorrectResultMessage,
  congratulationToUser,
  gameCounter,
} from '../index.js';

import getRandomInRange from '../getRandomInRange.js';

function askQuestion(number, secondNumber) {
  const question = `Question: ${number} ${secondNumber}`;
  console.log(question);
  return question;
}

function getNod(number, secondNumber) {
  if (secondNumber > number) return getNod(secondNumber, number);
  if (!secondNumber) return number;
  return getNod(secondNumber, number % secondNumber);
}

function checkAnswer(answer, number, secondNumber) {
  const result = getNod(number, secondNumber);

  return Number(answer) === result;
}

function selectNodGame() {
  const gameName = 'brain-nod';
  const minNumber = 1;
  const maxNumber = 20;
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const number = getRandomInRange(minNumber, maxNumber);
    const secondNumber = getRandomInRange(minNumber, maxNumber);
    const question = askQuestion(number, secondNumber);
    const answer = setAnswer();
    const correctAnswer = getNod(number, secondNumber);

    if (checkAnswer(answer, number, secondNumber)) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default selectNodGame;

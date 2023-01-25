import {
  correctResultMessage,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  congratulationToUser,
  gameCounter,
} from '../index.js';

import getRandomInRange from '../getRandomInRange.js';

function askQuestion(number) {
  const question = `Question: ${number}`;
  console.log(question);
  return question;
}

function isParityNumber(number) {
  return number % 2 === 0;
}

function checkAnswer(answer, number) {
  return (answer === 'yes' && isParityNumber(number))
        || (answer === 'no' && !isParityNumber(number));
}

function getCorrectAnswer(number) {
  if (isParityNumber(number)) {
    return 'yes';
  }
  return 'no';
}

function selectEvenNumberGame() {
  const gameName = 'brain-even';
  const min = 1;
  const max = 20;
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const number = getRandomInRange(min, max);
    const question = askQuestion(number, gameName);
    const answer = setAnswer();
    const correctAnswer = getCorrectAnswer(number);

    if (checkAnswer(answer, number)) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default selectEvenNumberGame;

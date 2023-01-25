import {
  congratulationToUser, correctResultMessage,
  gameCounter,
  getUsername,
  printHello,
  printWelcome,
  setAnswer,
  incorrectResultMessage,
  printCondition,
} from './utils.js';

function gameEngine(condition, roundGenerator) {
  printWelcome();
  const userName = getUsername();
  printHello(userName);
  printCondition(condition);

  let counter = 0;
  while (counter < gameCounter) {
    const [question, correctAnswer] = roundGenerator();
    console.log(question);
    const answer = setAnswer();

    if (correctAnswer === answer) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default gameEngine;

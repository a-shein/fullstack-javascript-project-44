import {
  correctResultMessage,
  generateNumber,
  greetings,
  setAnswer,
  setCondition,
  incorrectResultMessage,
  congratulationToUser,
  gameCounter,
} from '../index.js';

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

function negativeAnswerToUser(answer, userName, number, secondNumber, question) {
  const correctAnswer = getNod(number, secondNumber);
  incorrectResultMessage(correctAnswer, answer, userName, question);
}

function selectNodGame() {
  const gameName = 'brain-nod';
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const number = generateNumber();
    const secondNumber = generateNumber();
    const question = askQuestion(number, secondNumber);
    const answer = setAnswer();

    if (checkAnswer(answer, number, secondNumber)) {
      correctResultMessage();
      counter += 1;
    } else {
      return negativeAnswerToUser(answer, userName, number, secondNumber, question);
    }
  }

  return congratulationToUser(userName);
}

export default selectNodGame;

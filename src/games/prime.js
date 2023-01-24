import {
  congratulationToUser,
  correctResultMessage,
  generateTool,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  gameCounter,
} from '../index.js';

function askQuestion(number) {
  const question = `Question: ${number}`;
  console.log(question);
  return question;
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

function checkAnswer(answer, number) {
  return (answer === 'no' && !isPrimeNumber(number))
        || (answer === 'yes' && isPrimeNumber(number));
}

function primeGame() {
  const gameName = 'brain-prime';
  const minNumber = 2;
  const maxNumber = 20;
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const number = generateTool(minNumber, maxNumber);
    const question = askQuestion(number);
    const answer = setAnswer();
    const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

    if (checkAnswer(answer, number)) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default primeGame;

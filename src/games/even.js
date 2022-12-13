import {
  correctResultMessage,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  congratulationToUser,
  generateTool,
  gameCounter,
} from '../index.js';

function askQuestion(number) {
  const question = `Question: ${number}`;
  console.log(question);
  return question;
}

function parityNumber(number) {
  return number % 2 === 0;
}

function checkAnswer(answer, number) {
  return (answer === 'yes' && (parityNumber(number)))
        || (answer === 'no' && !parityNumber(number));
}

function getCorrectAnswer(number) {
  if (parityNumber(number)) {
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
    const number = generateTool(min, max);
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

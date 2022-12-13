import {
  correctResultMessage,
  generateNumber,
  greetings,
  incorrectResultMessage,
  setAnswer,
  setCondition,
  congratulationToUser,
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

function negativeAnswerToUser(answer, userName, number, question) {
  let correctAnswer;
  const yes = 'yes';
  const no = 'no';
  switch (answer) {
    case yes:
      correctAnswer = no;
      break;
    case no:
      correctAnswer = yes;
      break;
    default:
      correctAnswer = parityNumber(number) ? yes : no;
  }

  incorrectResultMessage(correctAnswer, answer, userName, question);
}

function selectEvenNumberGame() {
  const gameName = 'brain-even';
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    let result = null;
    const number = generateNumber();
    const question = askQuestion(number, gameName);
    const answer = setAnswer();
    result = checkAnswer(answer, number);

    if (result) {
      correctResultMessage();
      counter += 1;
    } else {
      return negativeAnswerToUser(answer, userName, number, question);
    }
  }

  return congratulationToUser(userName);
}

export default selectEvenNumberGame;

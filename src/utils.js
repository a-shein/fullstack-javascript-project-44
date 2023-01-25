import readlineSync from 'readline-sync';

function getUsername() {
  return readlineSync.question('May I have your name? ');
}

function printWelcome() {
  console.log('Welcome to the Brain Games!');
}

function printHello(userName) {
  console.log(`Hello, ${userName}!`);
}

function printCondition(condition) {
  console.log(condition);
}

function askSimpleQuestion(item) {
  return `Question: ${item}`;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setAnswer() {
  return readlineSync.question('Your answer: ');
}

function correctResultMessage() {
  console.log('Correct!');
}

function congratulationToUser(userName) {
  console.log(`Congratulations, ${userName}!`);
}

function incorrectResultMessage(correctAnswer, answer, userName, question) {
  console.log(question);
  console.log(`Your answer: ${answer}`);
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`,
  );
}

const gameCounter = 3;

export {
  getRandomInRange,
  setAnswer,
  correctResultMessage,
  incorrectResultMessage,
  congratulationToUser,
  gameCounter,
  printHello,
  printWelcome,
  getUsername,
  printCondition,
  askSimpleQuestion,
};

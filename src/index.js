import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
}

function setCondition(gameName) {
  if (gameName === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (gameName === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (gameName === 'brain-nod') {
    console.log('Find the greatest common divisor of given numbers.');
  }
}

function generateNumber() {
  return Math.floor(Math.random() * 100);
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
  greetings,
  setCondition,
  generateNumber,
  setAnswer,
  correctResultMessage,
  incorrectResultMessage,
  congratulationToUser,
  gameCounter,
};

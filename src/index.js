import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
}

function setCondition(gameName) {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-nod':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
  }
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
  setAnswer,
  correctResultMessage,
  incorrectResultMessage,
  congratulationToUser,
  gameCounter,
};

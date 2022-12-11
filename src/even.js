import readlineSync from 'readline-sync';

function generateNumber() {
  return Math.floor(Math.random() * 100);
}

function parityNumber(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

function checkAnswer(answer, number) {
  return (answer === 'yes' && parityNumber(number) === 'Even')
        || (answer === 'no' && parityNumber(number) === 'Odd');
}

function congratulationToUser(userName) {
  console.log(`Congratulations, ${userName}!`);
}

function negativeAnswerToUser(answer, userName) {
  let correctAnswer = '';

  if (answer === 'yes') {
    correctAnswer = 'no';
  } else if (answer === 'no') {
    correctAnswer = 'yes';
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`,
  );
}

function selectEvenNumberGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const number = generateNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const result = checkAnswer(answer, number);

    if (result) {
      console.log('Correct!');
      counter += 1;
    } else {
      return negativeAnswerToUser(answer, userName);
    }
  }

  return congratulationToUser(userName);
}

export default selectEvenNumberGame;

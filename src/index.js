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
  }
}

function generateNumber() {
  return Math.floor(Math.random() * 100);
}

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(Math.random() * operators.length)];
}

function askQuestion(number, gameName, secondNumber = null, operator = null) {
  if (gameName === 'brain-even') {
    console.log(`Question: ${number}`);
  } else if (gameName === 'brain-calc') {
    console.log(`${number} ${operator} ${secondNumber}`);
  }
}

function setAnswer() {
  return readlineSync.question('Your answer: ');
}

function parityNumber(number) {
  return number % 2 === 0;
}

function calculate(number, secondNumber, operator) {
  let result = 0;
  switch (operator) {
    case '-':
      result = number - secondNumber;
      break;
    case '+':
      result = number + secondNumber;
      break;
    case '*':
      result = number * secondNumber;
      break;
    default:
      break;
  }

  return result;
}

function checkAnswer(answer, number, gameName, secondNumber = null, operator = null) {
  if (gameName === 'brain-even') {
    return (answer === 'yes' && (parityNumber(number)))
            || (answer === 'no' && !parityNumber(number));
  }

  if (gameName === 'brain-calc') {
    const result = calculate(number, secondNumber, operator);

    return Number(answer) === result;
  }

  return false;
}

function correctResultMessage() {
  console.log('Correct!');
}

function congratulationToUser(userName) {
  console.log(`Congratulations, ${userName}!`);
}

function incorrectResultMessage(correctAnswer, answer, userName) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`,
  );
}

function negativeAnswerToUser(
  answer,
  userName,
  number,
  gameName,
  secondNumber = null,
  operator = null,
) {
  let correctAnswer = '';
  if (gameName === 'brain-even') {
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

    incorrectResultMessage(correctAnswer, answer, userName);
  } else if (gameName === 'brain-calc') {
    correctAnswer = calculate(number, secondNumber, operator);
    incorrectResultMessage(correctAnswer, answer, userName);
  }
}

function game(gameName) {
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  if (gameName === 'brain-even') {
    while (counter < 3) {
      let result = null;
      const number = generateNumber();
      askQuestion(number, gameName);
      const answer = setAnswer();
      result = checkAnswer(answer, number, gameName);

      if (result) {
        correctResultMessage();
        counter += 1;
      } else {
        return negativeAnswerToUser(answer, userName, number, gameName);
      }
    }
  } else if (gameName === 'brain-calc') {
    while (counter < 3) {
      let result = null;
      const number = generateNumber();
      const secondNumber = generateNumber();
      const operator = generateOperator();
      askQuestion(number, gameName, secondNumber, operator);
      const answer = setAnswer();
      result = checkAnswer(answer, number, gameName, secondNumber, operator);

      if (result) {
        correctResultMessage();
        counter += 1;
      } else {
        return negativeAnswerToUser(answer, userName, number, gameName, secondNumber, operator);
      }
    }
  }

  return congratulationToUser(userName);
}

export default game;

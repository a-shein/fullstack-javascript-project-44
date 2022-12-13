import {
  correctResultMessage,
  greetings,
  setAnswer,
  setCondition,
  incorrectResultMessage,
  congratulationToUser,
  generateTool,
  gameCounter,
} from '../index.js';

function generator(lengthOfProgression, firstElementOfProgression, stepOfProgression) {
  const progressionArray = [firstElementOfProgression];

  while (progressionArray.length < lengthOfProgression) {
    const newElement = progressionArray[progressionArray.length - 1] + stepOfProgression;
    progressionArray.push(newElement);
  }

  return progressionArray;
}

function generateProgression() {
  const minLength = 5;
  const maxLength = 10;
  const lengthOfProgression = generateTool(minLength, maxLength);

  const minStep = 1;
  const maxStep = 10;
  const stepOfProgression = generateTool(minStep, maxStep);

  const minNubmer = 1;
  const maxNumber = 20;
  const firstElementOfProgression = generateTool(minNubmer, maxNumber);

  return generator(lengthOfProgression, firstElementOfProgression, stepOfProgression);
}

function generateSecretIndex(progressionArray) {
  return generateTool(0, progressionArray.length - 1);
}

function generateStringWithSecretElement(progressionArray, secretIndex) {
  const progressionArrayCopy = progressionArray;
  progressionArrayCopy[secretIndex] = '..';

  return progressionArrayCopy.join(' ');
}

function askQuestion(progression) {
  const question = `Question: ${progression}`;
  console.log(question);
  return question;
}

function getCorrectElement(progression, secretIndex) {
  return progression[secretIndex];
}

function checkAnswer(answer, correctElement) {
  return Number(answer) === correctElement;
}

function progressionGame() {
  const gameName = 'brain-progression';
  const userName = greetings();
  setCondition(gameName);

  let counter = 0;
  while (counter < gameCounter) {
    const progression = generateProgression();
    const secretIndex = generateSecretIndex(progression);
    const correctAnswer = getCorrectElement(progression, secretIndex);
    const progressionWithSecretElement = generateStringWithSecretElement(progression, secretIndex);
    const question = askQuestion(progressionWithSecretElement);
    const answer = setAnswer();

    if (checkAnswer(answer, correctAnswer)) {
      correctResultMessage();
      counter += 1;
    } else {
      return incorrectResultMessage(correctAnswer, answer, userName, question);
    }
  }

  return congratulationToUser(userName);
}

export default progressionGame;

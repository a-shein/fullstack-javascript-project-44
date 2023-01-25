import { getRandomInRange } from '../utils.js';
import gameEngine from '../game-process.js';

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
  const lengthOfProgression = getRandomInRange(minLength, maxLength);

  const minStep = 1;
  const maxStep = 10;
  const stepOfProgression = getRandomInRange(minStep, maxStep);

  const minNumber = 1;
  const maxNumber = 20;
  const firstElementOfProgression = getRandomInRange(minNumber, maxNumber);

  return generator(lengthOfProgression, firstElementOfProgression, stepOfProgression);
}

function generateSecretIndex(progressionArray) {
  return getRandomInRange(0, progressionArray.length - 1);
}

function generateStringWithSecretElement(progressionArray, secretIndex) {
  const progressionArrayCopy = progressionArray;
  progressionArrayCopy[secretIndex] = '..';

  return progressionArrayCopy.join(' ');
}

function askSimpleQuestion(progression) {
  return `Question: ${progression}`;
}

function getCorrectElement(progression, secretIndex) {
  return progression[secretIndex];
}

function progressionGameRoundGenerator() {
  const progression = generateProgression();
  const secretIndex = generateSecretIndex(progression);
  const correctAnswer = String(getCorrectElement(progression, secretIndex));
  const progressionWithSecretElement = generateStringWithSecretElement(progression, secretIndex);
  const question = askSimpleQuestion(progressionWithSecretElement);

  return [question, correctAnswer];
}

const condition = 'What number is missing in the progression?';
gameEngine(condition, progressionGameRoundGenerator);

export default progressionGameRoundGenerator;

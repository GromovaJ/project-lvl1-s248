import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber } from '../general';

const getDataForQuestion = (
  memberPr, stepPr, lengthPr,
  hiddenInd, currentInd, arrProgression,
) => {
  if (lengthPr === 0) return arrProgression.join(' ');
  if (currentInd !== hiddenInd) {
    arrProgression.push(memberPr);
  } else {
    arrProgression.push('..');
  }
  return getDataForQuestion(
    memberPr + stepPr, stepPr, lengthPr - 1,
    hiddenInd, currentInd + 1, arrProgression,
  );
};

const getData = () => {
  const arr = [];
  const startProgression = getRandomNumber();
  const stepProgression = getRandomNumber();
  const hiddenIndex = Math.floor(Math.random() * 10);
  const lengthProgression = 10;
  const currentIndex = 0;
  const correctAnswer = startProgression + (hiddenIndex * stepProgression);

  const dataForQuestion = getDataForQuestion(
    startProgression, stepProgression, lengthProgression, hiddenIndex,
    currentIndex, arr,
  );

  const question = dataForQuestion;
  const answer = `${correctAnswer}`;
  return cons(question, answer);
};

export default () => {
  getGame('What number is missing in this progression?', getData);
};

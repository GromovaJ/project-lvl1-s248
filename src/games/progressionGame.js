import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber } from '../general';

const arrProgression = [];

const getDataForQuestion = (
  memberProgression, stepProgression, lengthProgression,
  hiddenIndex, currentIndex,
) => {
  if (lengthProgression === 0) return arrProgression.join(' ');
  if (currentIndex === hiddenIndex) {
    arrProgression.push('..');
  } else {
    arrProgression.push(memberProgression);
  }
  return getDataForQuestion(
    memberProgression + stepProgression, stepProgression, lengthProgression - 1,
    hiddenIndex, currentIndex + 1,
  );
};

const getData = () => {
  arrProgression.length = 0;
  const startProgression = getRandomNumber();
  const stepProgression = getRandomNumber();
  const hiddenIndex = Math.floor(Math.random() * 10);
  const lengthProgression = 10;
  const currentIndex = 0;
  const correctAnswer = startProgression + (hiddenIndex * stepProgression);
  const dataForQuestion = getDataForQuestion(
    startProgression, stepProgression, lengthProgression,
    hiddenIndex, currentIndex,
  );
  const x = dataForQuestion;
  const y = `${correctAnswer}`;
  return cons(x, y);
};

export default () => {
  getGame('What number is missing in this progression?', getData);
};

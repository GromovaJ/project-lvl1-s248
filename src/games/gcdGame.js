import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, getGcd } from '../general';

const getData = () => {
  const firstN = getRandomNumber();
  const secondN = getRandomNumber();
  const correctAnswer = getGcd(firstN, secondN);
  const x = `${firstN} ${secondN}`;
  const y = `${correctAnswer}`;
  return cons(x, y);
};

export default () => {
  getGame('Find the greatest common divisor of given numbers.', 3, getData);
};

import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, getSign } from '../general';

const getCalc = (firstN, secondN, sign) => {
  if (sign === '+') {
    return firstN + secondN;
  } else if (sign === '-') {
    return firstN - secondN;
  }
  return firstN * secondN;
};

const getData = () => {
  const firstN = getRandomNumber();
  const secondN = getRandomNumber();
  const sign = getSign();
  const correctAnswer = getCalc(firstN, secondN, sign);
  const x = `${firstN} ${sign} ${secondN}`;
  const y = `${correctAnswer}`;
  return cons(x, y);
};

export default () => {
  getGame('What is the result of the expression?', 3, getData);
};

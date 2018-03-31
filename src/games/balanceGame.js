import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, getBalancedNumber } from '../general';

const getData = () => {
  const question = getRandomNumber();
  const answer = getBalancedNumber(question);
  return cons(question, answer);
};

export default () => {
  getGame('Balance the given number.', getData);
};

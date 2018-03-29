import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, isEven } from '../general';

const getData = () => {
  const x = getRandomNumber();
  const y = isEven(x);
  return cons(x, y);
};

export default () => {
  getGame('Answer "yes" if number even otherwise answer "no".', 3, getData);
};

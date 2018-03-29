import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../general';

const isEvenNumber = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const x = getRandomNumber();
  const y = isEvenNumber(x);
  return cons(x, y);
};

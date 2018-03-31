import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, isPrime } from '../general';

const getData = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  getGame('Is this number prime?', getData);
};

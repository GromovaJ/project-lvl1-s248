import { cons } from 'hexlet-pairs';
import { getGame } from '..';
import { getRandomNumber, compareNumeric } from '../general';


const getCalc = (num) => {
  const newArr = [];
  const numLength = String(num).length;
  const arr = String(num).split('').map(Number);
  arr.sort(compareNumeric);
  if (arr[numLength - 1] - arr[0] <= 1) return String(num);
  const numSum = arr.reduce((sum, current) => {
    const ss = sum + current;
    return ss;
  }, 0);
  const remainder = numSum % numLength;
  const digit = Math.floor(numSum / numLength);
  for (let counter = 0; counter < numLength; counter += 1) {
    if (counter <= numLength - remainder - 1) {
      newArr.push(digit);
    } else newArr.push(digit + 1);
  }
  const newString = newArr.join('');
  return newString;
};

const getData = () => {
  const x = getRandomNumber();
  const y = getCalc(x);
  return cons(x, y);
};

export default () => {
  getGame('Balance the given number.', getData);
};

export const getRandomNumber = () => {
  const randomNumber = Math.floor((Math.random() * 1000) + 1);
  return randomNumber;
};

export const isEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

export const getSign = () => {
  let sign;
  const randomN = Math.floor((Math.random() * 3) + 1);
  switch (randomN) {
    case 1:
      sign = '+';
      break;
    case 2:
      sign = '-';
      break;
    default:
      sign = '*';
      break;
  }
  return sign;
};

export const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export const compareNumeric = (a, b) => {
  if (a > b) return 1;
  return -1;
};

export const getBalancedNumber = (num) => {
  const newArr = [];
  const lengthOfNumber = String(num).length;
  const arr = String(num).split('').map(Number);

  arr.sort(compareNumeric);

  if (arr[lengthOfNumber - 1] - arr[0] <= 1) return String(num);
  const sumOfDigitsOfNumber = arr.reduce((sum, current) => {
    const ss = sum + current;
    return ss;
  }, 0);

  const remainder = sumOfDigitsOfNumber % lengthOfNumber;
  const digitOfBalancedNumber = Math.floor(sumOfDigitsOfNumber / lengthOfNumber);

  for (let counter = 0; counter < lengthOfNumber; counter += 1) {
    if (counter <= lengthOfNumber - remainder - 1) {
      newArr.push(digitOfBalancedNumber);
    } else newArr.push(digitOfBalancedNumber + 1);
  }
  const balancedNumberString = newArr.join('');
  return balancedNumberString;
};

export const isPrime = (num) => {
  for (let counter = 2; counter <= Math.floor(Math.sqrt(num + 1)); counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

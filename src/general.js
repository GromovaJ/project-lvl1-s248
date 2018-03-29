export const getRandomNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
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

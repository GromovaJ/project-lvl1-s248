export const getRandomNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  return randomNumber;
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

import readlineSync from 'readline-sync';

const getInvite = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};
const invite = getInvite();

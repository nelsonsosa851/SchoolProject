const getRandomNumber = (): number => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber();
console.log(randomNumber);

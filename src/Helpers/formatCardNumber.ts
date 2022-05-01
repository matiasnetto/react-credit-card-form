const formatCardNumber = (number: number | null): string => {
  if (number === null) return '';

  const iterationsAmount = number.toString().length / 4;
  const numberString = number.toString();
  const numbersArray: string[] = [];

  for (let i = 0; i < iterationsAmount; i++) {
    numbersArray.push(numberString.slice(i * 4, i * 4 + 4));
  }

  return numbersArray.join(' ');
};

export default formatCardNumber;

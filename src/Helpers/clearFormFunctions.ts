const clearCreditNumberString = (string: string): number | null => {
  const number = Number(string.split(' ').join(''));
  if (isNaN(number)) return Number(string.slice(0, string.length - 1)) || null;
  if (string === '') return null;
  if (string.length > 16) return Number(string.slice(0, 16));
  return number;
};

const clearExpDate = (string: string): number | null => {
  const number = Number(string);
  if (isNaN(number)) return Number(string.slice(0, string.length - 1)) || null;
  if (string === '') return null;
  if (number.toString().length > 2) return Number(number.toString().slice(0, 2));
  return number;
};

const clearSecurityCode = (string: string): string | null => {
  if (isNaN(Number(string))) return string.slice(0, string.length - 1); //Filter not number input
  if (string.length > 3) return string.slice(0, 3); //Limit length to 3
  return string;
};

export { clearCreditNumberString, clearExpDate, clearSecurityCode };

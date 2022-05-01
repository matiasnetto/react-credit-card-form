const formatExpDate = (date: number | null): string | null => {
  if (date === null) return null;
  if (date.toString().length === 1 && date !== 0) return `0${date}`;
  return date.toString();
};

export default formatExpDate;

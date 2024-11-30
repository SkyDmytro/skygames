export const getIsCountryGuessed = (
  guessedLetters: string[],
  countryName: string,
): boolean => {
  if (countryName === '') return false;

  const splitedCountyNameByLetters = countryName
    .toUpperCase()
    .replace(/\s+/g, '')
    .split('');

  return splitedCountyNameByLetters.every((letter) =>
    guessedLetters.includes(letter.toUpperCase()),
  );
};

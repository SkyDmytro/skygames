import { useCountryStore } from '../stores/countryStore';
import { useScoreStore } from '../stores/scoreStore';

export const useHandleLetterClick = () => {
  const { addGuessedLetter, countryName } = useCountryStore();
  const { decreaseHealth } = useScoreStore();

  const handleLetterClick = (letter: string) => {
    const isInCountryName = countryName
      .toUpperCase()
      .includes(letter.toUpperCase());
    console.log(isInCountryName);
    if (!isInCountryName) {
      decreaseHealth();
    }
    addGuessedLetter(letter);
  };
  return { handleLetterClick };
};

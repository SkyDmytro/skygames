'use client';

import { useHandleLetterClick } from '../../hooks/useHandleLetterClick';
import { useCountryStore } from '../../stores/countryStore';
import { LETTERS } from '../../utils/constants';
import { Letter } from './ui/Letter';

export const LettersBlock = () => {
  const { handleLetterClick } = useHandleLetterClick();
  const { guessedLetters } = useCountryStore();
  return (
    <div className="inline-flex justify-center gap-2 flex-wrap ">
      {LETTERS.map((letter: string, index: number) => (
        <Letter
          letter={letter}
          key={index}
          onClick={handleLetterClick}
          isDisabled={guessedLetters.includes(letter.toLowerCase())}
        />
      ))}
    </div>
  );
};

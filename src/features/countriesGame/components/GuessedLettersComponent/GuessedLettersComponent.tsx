'use client';

import { useCountryStore } from '@/features/countriesGame/stores/countryStore';

import { LetterController } from './ui';

export const GuessedLettersComponent = () => {
  const { countryName, guessedLetters } = useCountryStore();
  const splitedCountyNameByWords = countryName.split(' ');

  return (
    <div className="flex flex-col gap-2">
      {splitedCountyNameByWords.map((countryString: string, idx) => {
        return (
          <div
            key={idx}
            className="flex justify-center items-center gap-4 sm:gap-2 max-w-[90vw]"
          >
            {countryString.split('').map((letter, letterIdx) => {
              return (
                <LetterController
                  key={letterIdx}
                  letter={letter}
                  isGuessed={guessedLetters.includes(letter.toLowerCase())}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

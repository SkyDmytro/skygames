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
            className="flex max-w-[90vw] items-center justify-center gap-4 sm:gap-2"
          >
            {countryString.split('').map((letter, letterIdx) => {
              return (
                <LetterController
                  key={letterIdx}
                  letter={letter}
                  isGuessed={guessedLetters.includes(letter.toUpperCase())}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

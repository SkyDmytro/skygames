'use client';

import { useCountryStore } from '../../stores/countryStore';
import { LetterController } from './ui';

export const GuessedLettersComponent = () => {
  const { countryName } = useCountryStore();
  const ar = countryName.split(' ');

  return (
    <div className="flex flex-col gap-2">
      {ar.map((countryString, idx) => {
        return (
          <div
            key={idx}
            className="flex justify-center items-center gap-4 max-w-[90vw]"
          >
            {countryString.split('').map((letter, letterIdx) => {
              return (
                <LetterController
                  key={letterIdx}
                  letter={letter}
                  isGuessed={false}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

'use client';

import { useEffect } from 'react';

import { useHandleLetterClick } from '../../hooks/useHandleLetterClick';
import { useCountryStore } from '../../stores/countryStore';
import { useTimerStore } from '../../stores/timerStore';
import { LETTERS } from '../../utils/constants';
import { Letter } from './ui/Letter';

export const LettersBlock = () => {
  const { handleLetterClick } = useHandleLetterClick();
  const { guessedLetters } = useCountryStore();
  const { startTimer } = useTimerStore();
  useEffect(() => {
    if (guessedLetters.length === 1) {
      startTimer();
      console.log('start timer');
    }
  }, [guessedLetters]);

  return (
    <div className="inline-flex justify-center gap-2 flex-wrap ">
      {LETTERS.map((letter: string, index: number) => (
        <Letter
          letter={letter}
          key={index}
          onClick={handleLetterClick}
          isDisabled={guessedLetters.includes(letter.toUpperCase())}
        />
      ))}
    </div>
  );
};

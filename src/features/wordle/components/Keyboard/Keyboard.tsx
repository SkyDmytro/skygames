'use client';

import { cn } from '@/lib/cn';

import { DeleteIcon } from 'lucide-react';

import { LETTERS } from '../../utils/constants';
import { KeyboardLetterWordle } from './ui/KeyboardLetterWordle';

export const Keyboard = () => {
  const handleClick = (letter: string) => {
    console.log(letter);
  };

  const letterClassNames =
    'flex h-14 w-14 items-center justify-center rounded-lg bg-blue-300 text-xl';
  return (
    <div className="flex w-2/3 flex-wrap justify-center gap-2">
      {LETTERS.map((letter, idx) => (
        <KeyboardLetterWordle
          letter={letter}
          key={idx}
          onClick={handleClick}
          className={letterClassNames}
        />
      ))}
      <div className={cn(letterClassNames)}>
        <DeleteIcon />
      </div>
    </div>
  );
};

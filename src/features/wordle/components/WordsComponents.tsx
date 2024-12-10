'use client';

import { WordType } from '../types/wordType';
import { WordComponent } from './WordComponent';

export const WordsComponents = ({}: WordType) => {
  // const { guessedWords } = useWordsScore();
  const words = ['wordl', 'abcde'];
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {[...Array(5)].map((_, idx) => (
        <WordComponent word={words[idx] || 'wordl'} key={idx} />
      ))}
    </div>
  );
};

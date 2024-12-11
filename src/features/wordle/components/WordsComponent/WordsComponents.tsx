'use client';

import { useWordsScore } from '../../stores/wordsStore';
import { WordType } from '../../types/wordType';
import { EMPTY_ARRAY } from '../../utils/constants';
import { WordComponent } from './ui/WordComponent';

export const WordsComponents = ({}: WordType) => {
  const { guessedWords } = useWordsScore();
  const emptyRow = EMPTY_ARRAY;
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {[...Array(5)].map((_, idx) => (
        <WordComponent word={guessedWords[idx] || emptyRow[idx]} key={idx} />
      ))}
    </div>
  );
};

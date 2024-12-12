import { getWordById } from '@/features/wordle/api/getWordById';
import { Keyboard } from '@/features/wordle/components/Keyboard/Keyboard';
import { WordsComponents } from '@/features/wordle/components/WordsComponent/WordsComponents';
import { WordType } from '@/features/wordle/types/wordType';
import { AMOUNT_OF_WORDS } from '@/features/wordle/utils/constants';

export const WordlePage = async () => {
  const wordId = Math.floor(Math.random() * AMOUNT_OF_WORDS) + 1;

  const { word, id }: WordType = await getWordById(wordId);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="mb-4 flex justify-center text-3xl">Wordle</h1>
      <WordsComponents word={word} id={id} />
      <div className="flex w-full items-center justify-center">
        <Keyboard />
      </div>
    </div>
  );
};

export default WordlePage;

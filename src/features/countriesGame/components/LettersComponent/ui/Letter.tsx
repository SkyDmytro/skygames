import { LetterLayout } from '@/components/LetterLayout/LetterLayout';

export const Letter = ({ letter }: { letter: string }) => {
  return (
    <LetterLayout classNames="bg-blue-600 shadow-lg shadow-blue-700/50">
      {letter.toUpperCase()}
    </LetterLayout>
  );
};

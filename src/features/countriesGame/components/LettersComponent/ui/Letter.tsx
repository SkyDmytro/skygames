'use client';

import { LetterLayout } from '@/features/countriesGame/components/LettersComponent/ui/LetterLayout';

export const Letter = ({
  letter,
  isDisabled,
  onClick,
}: {
  letter: string;
  isDisabled?: boolean;
  onClick: (letter: string) => void;
}) => {
  const handleLetterClick = () => {
    onClick(letter);
  };
  return (
    <LetterLayout
      isDisabled={isDisabled}
      onClick={handleLetterClick}
      classNames="bg-blue-600 shadow-lg shadow-blue-700/50"
    >
      {letter.toUpperCase()}
    </LetterLayout>
  );
};

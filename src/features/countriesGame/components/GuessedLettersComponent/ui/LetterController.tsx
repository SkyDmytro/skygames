'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { GuessedLetterDesktop } from './GuessedLetter';
import { GuessedLetterMobile } from './GuessedLetterMobile';
import { UnGessedLetterDesktop } from './UnGessedLetter';
import { UnGessedLetterMobile } from './UnGessedLetterMobile';

interface LetterControllerProps {
  isGuessed: boolean;
  letter: string;
}
export const LetterController = ({
  isGuessed,
  letter,
}: LetterControllerProps) => {
  const isMobile = useMediaQuery(640);
  if (isGuessed && isMobile) {
    return <GuessedLetterMobile letter={letter} />;
  }
  if (isGuessed && !isMobile) {
    return <GuessedLetterDesktop letter={letter} />;
  }
  if (!isGuessed && isMobile) {
    return <UnGessedLetterMobile />;
  }
  if (!isGuessed && !isMobile) {
    return <UnGessedLetterDesktop />;
  }
  return null;
};

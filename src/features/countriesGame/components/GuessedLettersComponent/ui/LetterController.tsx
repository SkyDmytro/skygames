import { GuessedLetter } from './GuessedLetter';
import { UnGessedLetter } from './UnGessedLetter';

interface LetterControllerProps {
  isGuessed: boolean;
  letter: string;
}
export const LetterController = ({
  isGuessed,
  letter,
}: LetterControllerProps) => {
  return isGuessed ? <GuessedLetter letter={letter} /> : <UnGessedLetter />;
};

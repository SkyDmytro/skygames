import { LetterController } from './ui';

export const GuessedLettersComponent = () => {
  const unitedKingdom = [
    'u',
    'n',
    'i',
    't',
    'e',
    'd',
    ' ',
    'k',
    'i',
    'n',
    'g',
    'd',
    'o',
    'm',
  ];

  return (
    <div className="flex flex-row gap-2">
      {unitedKingdom.map((letter) => (
        <LetterController key={letter} letter={letter} isGuessed={true} />
      ))}
    </div>
  );
};

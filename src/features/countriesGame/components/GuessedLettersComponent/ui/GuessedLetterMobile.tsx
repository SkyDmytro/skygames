export const GuessedLetterMobile = ({ letter }: { letter: string }) => {
  return (
    <div className="min-w-5 flex-1 border-spacing-y-2 border-b-4 text-lg font-bold">
      {letter.toUpperCase()}
    </div>
  );
};

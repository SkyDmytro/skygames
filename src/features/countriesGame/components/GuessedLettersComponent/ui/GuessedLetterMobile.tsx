export const GuessedLetterMobile = ({ letter }: { letter: string }) => {
  return (
    <div className=" border-b-4 border-spacing-y-2 min-w-5 flex-1 text-lg font-bold ">
      {letter.toUpperCase()}
    </div>
  );
};

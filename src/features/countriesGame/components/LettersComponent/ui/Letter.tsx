export const Letter = ({ letter }: { letter: string }) => {
  return (
    <div className="bg-slate-600 shadow-md h-40 w-40">
      {letter.toUpperCase()}
    </div>
  );
};

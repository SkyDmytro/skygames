export const WordItemComponent = ({ letter }: { letter: string }) => {
  return (
    <div className="flex aspect-square flex-1 items-center justify-center rounded-md bg-blue-300 font-bold sm:text-lg md:text-2xl lg:text-5xl">
      {letter}
    </div>
  );
};

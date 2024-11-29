import { cn } from '@/lib/cn';

export const GuessedLetterDesktop = ({ letter }: { letter: string }) => {
  return (
    <div
      className={cn(
        'rounded-lg sm:text-xl sm:min-h-10 sm:min-w-10 sm:h-16 sm:w-16  md:h-24 md:w-24 lg:h-32 lg:w-32 flex justify-center items-center font-bold md:text-3xl ',
        'bg-blue-600 shadow-lg shadow-blue-700/50',
      )}
    >
      {letter.toUpperCase()}
    </div>
  );
};

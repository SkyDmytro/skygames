import { cn } from '@/lib/cn';

export const GuessedLetterDesktop = ({ letter }: { letter: string }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg font-bold sm:h-16 sm:min-h-10 sm:w-16 sm:min-w-10 sm:text-xl md:h-24 md:w-24 md:text-3xl lg:h-32 lg:w-32',
        'bg-blue-600 shadow-lg shadow-blue-700/50',
      )}
    >
      {letter.toUpperCase()}
    </div>
  );
};

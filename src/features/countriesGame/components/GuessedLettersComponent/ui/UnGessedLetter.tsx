import { cn } from '@/lib/cn';

export const UnGessedLetterDesktop = () => {
  return (
    <div
      className={cn(
        'rounded-lg sm:text-xl sm:min-h-10 sm:min-w-10 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 flex justify-center items-center font-bold md:text-3xl ',
        'bg-gray-800 shadow-lg shadow-gray-700/50',
      )}
    ></div>
  );
};

import { cn } from '@/lib/cn';

import { ReactNode } from 'react';

export const LetterLayout = ({
  children,
  classNames,
}: {
  children?: ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-lg sm:text-xl sm:h-16 sm:w-16  md:h-24 md:w-24 lg:h-32 lg:w-32 flex justify-center items-center font-bold md:text-3xl ',
        classNames,
      )}
    >
      {children}
    </div>
  );
};

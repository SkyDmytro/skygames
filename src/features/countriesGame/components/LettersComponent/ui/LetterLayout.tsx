'use client';

import { cn } from '@/lib/cn';

import { ReactNode } from 'react';

export const LetterLayout = ({
  children,
  classNames,
  isDisabled = false,
  onClick,
}: {
  children?: ReactNode;
  classNames?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg font-bold sm:h-16 sm:w-16 sm:text-xl md:h-24 md:w-24 md:text-3xl lg:h-32 lg:w-32',
        classNames,
        isDisabled && 'bg-gray-800 shadow-lg shadow-gray-700/50',
      )}
      onClick={isDisabled ? undefined : onClick}
    >
      {children}
    </div>
  );
};

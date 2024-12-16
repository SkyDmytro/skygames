'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export const KeyboardLetterWordle = ({
  letter,
  onClick,
  ...props
}: Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onClick'
> & {
  letter: string;
  onClick: (letter: string) => void;
}) => {
  const handleLetterClick = () => {
    onClick(letter);
  };
  return (
    <div onClick={handleLetterClick} {...props}>
      {letter}
    </div>
  );
};

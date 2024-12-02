'use client';

import { cn } from '@/lib/cn';

import { LosePopUp } from './ui/LosePopUp';
import { VictoryPopup } from './ui/VictoryPopup';

export const PopUpController = ({
  isGuessed,
  isLost,
  health,
  time,
}: {
  isGuessed: boolean;
  isLost: boolean;
  health: number;
  time: number;
}) => {
  return (
    <div
      className={cn(
        'absolute z-40 w-full h-full flex justify-center items-center bg-black/70 text-blue-500',
        !isGuessed && !isLost && 'hidden',
        isLost && 'block',
        isGuessed && 'block',
      )}
    >
      <div className="z-50 w-1/2 h-1/2">
        {isGuessed && <VictoryPopup health={health} time={time} />}
        {isLost && <LosePopUp time={time} />}
      </div>
    </div>
  );
};

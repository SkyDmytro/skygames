'use client';

import { cn } from '@/lib/cn';

import { useEffect } from 'react';

import { usePopUpStore } from '../../stores/usePopUpStore';
import { HelpPopup } from '../CountryPageHeader/ui/HelpPopup';
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
  const { isOpened, currentPopup, closePopup, openPopupByType } =
    usePopUpStore();

  useEffect(() => {
    if (isGuessed) {
      openPopupByType('victory');
    }
    if (isLost) {
      openPopupByType('lose');
    }
  }, [isGuessed, isLost]);

  return (
    <div
      className={cn(
        'absolute z-40 flex h-full w-full items-center justify-center bg-black/70 text-blue-500',
        isOpened ? 'block' : 'hidden',
      )}
    >
      <div className="relative z-50 h-1/2 w-1/2 rounded-sm border-2 border-blue-500">
        <div className="absolute right-2 top-2" onClick={closePopup}>
          X
        </div>
        {currentPopup === 'victory' && (
          <VictoryPopup health={health} time={time} />
        )}
        {currentPopup === 'lose' && <LosePopUp time={time} />}
        {currentPopup === 'help' && <HelpPopup />}
      </div>
    </div>
  );
};

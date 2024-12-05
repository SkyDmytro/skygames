'use client';

import { cn } from '@/lib/cn';

import { useEffect } from 'react';

import { usePopups } from '../../hooks/usePopups';
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
  const {
    handleClosePopup,
    handleOpenPopup,
    isOpened,
    isHelpPopupOpen,
    isLosePopupOpen,
    isVictoryPopupOpen,
  } = usePopups();

  useEffect(() => {
    if (isGuessed) {
      handleOpenPopup('victory');
    }
    if (isLost) {
      handleOpenPopup('lose');
    }
  }, [isGuessed, isLost]);

  return (
    <div
      className={cn(
        'absolute z-40 flex h-full w-full items-center justify-center bg-black/70 text-blue-500',
        isOpened ? 'block' : 'hidden',
      )}
    >
      <div className="z-50 h-1/2 w-1/2">
        {isVictoryPopupOpen && <VictoryPopup health={health} time={time} />}
        {isLosePopupOpen && <LosePopUp time={time} />}
        {isHelpPopupOpen && <HelpPopup />}
      </div>
    </div>
  );
};

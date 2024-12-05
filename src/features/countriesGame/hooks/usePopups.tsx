import { useEffect } from 'react';

import { usePopUpStore } from '../stores/usePopUpStore';

export const usePopups = () => {
  const { closePopup, isOpened, openPopup, setPopup, currentPopup } =
    usePopUpStore();
  let isLosePopupOpen = false;
  let isVictoryPopupOpen = false;
  let isHelpPopupOpen = false;
  const handleOpenPopup = (popupType: 'victory' | 'lose' | 'help') => () => {
    setPopup(popupType);
    openPopup();
  };
  const handleClosePopup = () => {
    closePopup();
  };
  useEffect(() => {
    isLosePopupOpen = currentPopup === 'lose';
    isVictoryPopupOpen = currentPopup === 'victory';
    isHelpPopupOpen = currentPopup === 'help';
  }, [currentPopup]);

  return {
    isOpened,
    handleOpenPopup,
    handleClosePopup,
    isLosePopupOpen,
    isVictoryPopupOpen,
    isHelpPopupOpen,
  };
};

import { usePopUpStore } from '../stores/usePopUpStore';

export const usePopups = () => {
  const { closePopup, openPopup, setPopup } = usePopUpStore();
  const handleOpenPopup = (popupType: 'victory' | 'lose' | 'help') => () => {
    setPopup(popupType);
    openPopup();
  };
  const handleClosePopup = () => {
    closePopup();
  };

  return {
    handleOpenPopup,
    handleClosePopup,
  };
};

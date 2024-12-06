import { create } from 'zustand';

export type PopUpState = {
  isOpened: boolean;
  currentPopup: 'victory' | 'lose' | 'help';
};

export type PopUpActions = {
  openPopup: () => void;
  closePopup: () => void;
  setPopup: (popup: 'victory' | 'lose' | 'help') => void;
  openPopupByType: (popupType: 'victory' | 'lose' | 'help') => void;
};

export type PopUpStore = PopUpState & PopUpActions;

export const usePopUpStore = create<PopUpStore>((set) => ({
  isOpened: false,
  currentPopup: 'help',
  openPopup: () => set({ isOpened: true }),
  openPopupByType: (popupType: 'victory' | 'lose' | 'help') =>
    set({ isOpened: true, currentPopup: popupType }),
  closePopup: () => set({ isOpened: false }),
  setPopup: (popup) => set({ currentPopup: popup }),
}));

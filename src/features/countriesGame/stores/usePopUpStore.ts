import { create } from 'zustand';

export type PopUpState = {
  isOpened: boolean;
  currentPopup: 'victory' | 'lose' | 'help';
};

export type PopUpActions = {
  openPopup: () => void;
  closePopup: () => void;
  setPopup: (popup: 'victory' | 'lose' | 'help') => void;
};

export type PopUpStore = PopUpState & PopUpActions;

export const usePopUpStore = create<PopUpStore>((set) => ({
  isOpened: false,
  currentPopup: 'help',
  openPopup: () => set({ isOpened: true }),
  closePopup: () => set({ isOpened: false }),
  setPopup: (popup) => set({ currentPopup: popup }),
}));

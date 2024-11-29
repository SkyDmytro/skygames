import { create } from 'zustand';

export type CountryState = {
  countryName: string;
  guessedLetters: string[];
};

export type CountryActions = {
  addGuessedLetter: (letter: string) => void;
};

export type CountryStore = CountryState & CountryActions;

export const defaultInitState: CountryState = {
  countryName: 'Netherlands',
  guessedLetters: [],
};

export const useCountryStore = create<CountryState & CountryActions>((set) => ({
  ...defaultInitState,
  setCountry: (countryName: string) => set({ countryName }),
  addGuessedLetter: (letter: string) =>
    set((state) => ({ guessedLetters: [...state.guessedLetters, letter] })),
}));

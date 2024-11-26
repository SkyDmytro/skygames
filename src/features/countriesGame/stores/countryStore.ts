import { create } from 'zustand';

export type CountryState = {
  countryName: string[];
  guessedLetters: string[];
};

export type CountryActions = {
  addGuessedLetter: (letter: string) => void;
};

export type CountryStore = CountryState & CountryActions;

export const defaultInitState: CountryState = {
  countryName: [],
  guessedLetters: [],
};

export const useCountryStore = create<CountryState & CountryActions>((set) => ({
  ...defaultInitState,
  addGuessedLetter: (letter: string) =>
    set((state) => ({ guessedLetters: [...state.guessedLetters, letter] })),
}));

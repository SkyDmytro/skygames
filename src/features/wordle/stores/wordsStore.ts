import { create } from 'zustand';

export type WordsState = {
  guessedWords: string[];
  isGuessed: boolean;
};

export type WordsActions = {
  addGuessedWord: (word: string) => void;
};

export type WordsStore = WordsState & WordsActions;

export const useWordsScore = create<WordsStore>((set) => ({
  guessedWords: [],
  isGuessed: false,
  addGuessedWord: (word: string) =>
    set((state) => ({ guessedWords: [...state.guessedWords, word] })),
}));

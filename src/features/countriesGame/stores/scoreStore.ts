import { create } from 'zustand';

export type ScoreState = {
  health: number;
};

export type ScoreActions = {
  decreaseHealth: () => void;
};

export type ScoreStore = ScoreState & ScoreActions;

export const useScoreStore = create<ScoreState & ScoreActions>((set) => ({
  health: 5,
  decreaseHealth: () => set((state) => ({ health: state.health - 1 })),
}));

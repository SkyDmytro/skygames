import { create } from 'zustand';

interface TimerState {
  time: number;
  isTimerStarted: boolean;
  intervalId: NodeJS.Timeout | null;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => ({
  time: 0,
  isTimerStarted: false,
  intervalId: null,

  startTimer: () => {
    const { isTimerStarted, intervalId } = get();

    if (isTimerStarted && intervalId) return;

    const newIntervalId = setInterval(() => {
      set((state) => ({ time: state.time + 1 }));
    }, 1000);

    set({ isTimerStarted: true, intervalId: newIntervalId });
  },

  stopTimer: () => {
    const { intervalId } = get();

    if (intervalId) {
      clearInterval(intervalId);
      set({ intervalId: null });
    }

    set({ isTimerStarted: false });
  },

  resetTimer: () => {
    get().stopTimer();
    set({ time: 0 });
  },
}));

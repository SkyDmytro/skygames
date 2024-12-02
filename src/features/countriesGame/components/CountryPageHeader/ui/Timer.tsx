'use client';

import { useTimerStore } from '@/features/countriesGame/stores/timerStore';

import { TimerIcon } from 'lucide-react';

export const Timer = () => {
  const { time } = useTimerStore();

  return (
    <div className="flex items-center text-2xl">
      <TimerIcon className="w-6 h-6" />: {time}
    </div>
  );
};
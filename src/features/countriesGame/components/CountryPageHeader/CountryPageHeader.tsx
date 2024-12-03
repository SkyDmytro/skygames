'use client';

import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';

import { Globe } from 'lucide-react';

import { DesktopHealth } from './ui/DesktopHealth';
import { Timer } from './ui/Timer';

export const CountryPageHeader = () => {
  const { health } = useScoreStore();
  return (
    <header className="mb-8 flex w-full items-center justify-between rounded-xl bg-transparent p-4 backdrop-blur-sm">
      <div className="flex items-center">
        <Globe className="mr-2 h-8 w-8 text-blue-400 sm:h-6 sm:w-6" />
        <span className="text-2xl font-bold sm:hidden md:inline">
          Guess the Country
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Timer />
        <DesktopHealth health={health} />
      </div>
    </header>
  );
};

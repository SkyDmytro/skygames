'use client';

import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';

import { Globe } from 'lucide-react';

import { DesktopHealth } from './ui/DesktopHealth';

export const CountryPageHeader = () => {
  const { health } = useScoreStore();
  return (
    <header className="w-full flex justify-between items-center mb-8 bg-transparent backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center">
        <Globe className="sm:w-6 sm:h-6 w-8 h-8 mr-2 text-blue-400" />
        <span className="sm:hidden md:inline text-2xl font-bold">
          Guess the Country
        </span>
      </div>
      <div className="flex">
        <DesktopHealth health={health} />
      </div>
    </header>
  );
};

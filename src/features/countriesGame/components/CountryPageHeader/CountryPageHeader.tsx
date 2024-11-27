'use client';

import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';

import { Globe } from 'lucide-react';

import { DesktopHealth } from './ui/DesktopHealth';
import { MobileHealth } from './ui/MobileHealth';

export const CountryPageHeader = () => {
  const { health } = useScoreStore();
  return (
    <header className="w-full flex justify-between items-center mb-8 bg-transparent backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center">
        <Globe className="w-8 h-8 mr-2 text-blue-400" />
        <span className="text-2xl font-bold">Guess the Country</span>
      </div>
      <div className=" sm:flex md:hidden text-md text-blue-400 items-center ">
        <MobileHealth health={health} />
      </div>
      <div className="sm:hidden md:flex">
        <DesktopHealth health={health} />
      </div>
    </header>
  );
};

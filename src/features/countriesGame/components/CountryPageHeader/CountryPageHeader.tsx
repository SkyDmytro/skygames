'use client';

import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';

import { Globe, Heart } from 'lucide-react';

export const CountryPageHeader = () => {
  const { health } = useScoreStore();
  return (
    <header className="w-full flex justify-between items-center mb-8 bg-transparent backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center">
        <Globe className="w-8 h-8 mr-2 text-blue-400" />
        <span className="text-2xl font-bold">Guess the Country</span>
      </div>

      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className={`w-8 h-8 mx-1 ${i < health ? 'text-red-500' : 'text-gray-600'}`}
            fill={i < health ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    </header>
  );
};

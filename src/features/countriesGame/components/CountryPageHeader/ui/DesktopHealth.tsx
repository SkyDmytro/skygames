import { Heart } from 'lucide-react';

export const DesktopHealth = ({ health }: { health: number }) => {
  return (
    <>
      {[...Array(health)].map((_, i) => (
        <Heart
          key={i}
          className={`w-8 h-8 mx-1 ${i < health ? 'text-red-500' : 'text-gray-600'}`}
          fill={i < health ? 'currentColor' : 'none'}
        />
      ))}
    </>
  );
};

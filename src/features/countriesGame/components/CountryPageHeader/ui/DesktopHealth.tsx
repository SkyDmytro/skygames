import { Heart } from 'lucide-react';

export const DesktopHealth = ({ health }: { health: number }) => {
  return (
    <div className="flex">
      {[...Array(health)].map((_, i) => (
        <Heart
          key={i}
          className={`sm:w-6 sm:h-6 w-8 h-8 mx-1 ${i < health ? 'text-red-500' : 'text-gray-600'}`}
          fill={i < health ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

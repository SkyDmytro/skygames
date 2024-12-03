import { Heart } from 'lucide-react';

export const DesktopHealth = ({ health }: { health: number }) => {
  return (
    <div className="flex">
      {[...Array(health)].map((_, i) => (
        <Heart
          key={i}
          className={`mx-1 h-8 w-8 sm:h-6 sm:w-6 ${i < health ? 'text-red-500' : 'text-gray-600'}`}
          fill={i < health ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

import { Heart } from 'lucide-react';

export const MobileHealth = ({ health }: { health: number }) => {
  return (
    <>
      {health}
      <Heart className={`w-8 h-8 mx-1 text-red-500`} fill="currentColor" />
    </>
  );
};

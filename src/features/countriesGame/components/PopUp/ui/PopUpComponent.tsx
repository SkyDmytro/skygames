'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Frown, Star, Trophy } from 'lucide-react';

interface PopUpComponentProps {
  time: number;
  isWin: boolean;
  health: number;
  handleRestart: () => void;
}
export const PopUpComponent = ({
  time,
  isWin,
  health,
  handleRestart,
}: PopUpComponentProps): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`bg-white p-8 rounded-lg shadow-lg text-center ${
            isWin ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, loop: Infinity }}
            className="inline-block mb-4"
          >
            {isWin ? (
              <Trophy size={48} className="text-yellow-500" />
            ) : (
              <Frown size={48} className="text-red-500" />
            )}
          </motion.div>
          <h2
            className={`text-4xl font-bold mb-4 ${
              isWin ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isWin ? 'You won!' : 'You lost!'}
          </h2>
          <div className="mb-4 text-lg">
            <p className="flex items-center justify-center gap-2">
              <Star className="text-yellow-500" />
              Score: {health}
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              <Clock className="text-blue-500" />
              Time: {time}
            </p>
          </div>
          <button onClick={handleRestart} className="mt-4">
            Play Again
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

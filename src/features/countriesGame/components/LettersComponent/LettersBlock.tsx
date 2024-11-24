import { LETTERS } from '../../utils/constants';
import { Letter } from './ui/Letter';

export const LettersBlock = () => {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {LETTERS.map((item: string, index: number) => (
        <Letter letter={item} key={index} />
      ))}
    </div>
  );
};

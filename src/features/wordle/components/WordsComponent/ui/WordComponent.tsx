import { WordItemComponent } from './WordItemComponent';

export const WordComponent = ({ word }: { word: string }) => {
  return (
    <div className="flex flex-1 justify-center gap-2 sm:w-full md:w-[40%]">
      {word.length === 0 &&
        [...Array(5)].map(() => (
          <WordItemComponent letter=" " key={Math.random()} />
        ))}
      {word.length > 0 &&
        word
          .split('')
          .map((letter) => (
            <WordItemComponent key={Math.random()} letter={letter} />
          ))}
    </div>
  );
};

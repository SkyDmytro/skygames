import { GAMES } from '../../utils/constants';
import { GameItem } from '../GameItem/GameItem';

export const HomeComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center gap-10 bg-slate-950 text-white">
      <div className="container m-2 mx-auto flex h-full flex-col">
        <h1 className="self-center text-3xl">SkyGames</h1>
        <div className="flex-container flex-start flex">
          {GAMES.map((game) => (
            <GameItem
              key={game.title}
              description={game.description}
              img={game.img}
              pathgame={game.pathgame}
              title={game.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

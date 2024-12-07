import Image from 'next/image';
import Link from 'next/link';

import { gameType } from '../../types/gameType';

export const GameItem = ({
  pathgame,
  description,
  img,
  title,
}: Omit<gameType, 'id'>) => {
  return (
    <Link
      href={pathgame}
      className="rounded-md border-2 border-blue-700 p-4"
      key={title}
    >
      <div className="flex flex-1 flex-col gap-2 text-2xl" key={title}>
        <Image
          src={img}
          alt="Countries"
          width={200}
          height={200}
          className="w-full rounded ring-1 ring-blue-700"
        />
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-sm">{description}</h3>
      </div>
    </Link>
  );
};

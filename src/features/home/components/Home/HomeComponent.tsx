import Link from 'next/link';

export const HomeComponent = () => {
  return (
    <main className="bg-slate-900 text-white h-screen w-screen  flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl">SkyGames</h1>
      <Link href="/countries" className="underline text-blue-300">
        Country guesser
      </Link>
    </main>
  );
};

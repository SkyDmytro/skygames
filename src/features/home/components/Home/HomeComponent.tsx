import Link from 'next/link';

export const HomeComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-slate-900 text-white">
      <h1 className="text-3xl">SkyGames</h1>
      <Link href="/countries" className="text-blue-300 underline">
        Country guesser
      </Link>
    </main>
  );
};

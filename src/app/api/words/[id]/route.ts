import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const id = pathname.split('/').pop();

  if (!id) {
    return new Response('Word id not found', { status: 404 });
  }

  const word = { id: Number(id), word: 'wordl' };
  if (!word) {
    return new Response('Word not found', { status: 404 });
  }
  return new Response(JSON.stringify(word));
};

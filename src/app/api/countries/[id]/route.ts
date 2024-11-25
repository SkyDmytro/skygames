import getCountryById from '@/features/countriesGame/api/getCountryById';

import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const id = pathname.split('/').pop();

  if (!id) {
    return new Response('Country ID not found', { status: 404 });
  }

  const country = await getCountryById(Number(id));
  if (!country) {
    return new Response('Country not found', { status: 404 });
  }
  return new Response(JSON.stringify(country));
};

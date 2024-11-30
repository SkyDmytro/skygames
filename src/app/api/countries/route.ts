import getCountriesFromDB from '@/features/countriesGame/api/getCountriesFromDB';

async function getAllCountries() {
  const countries = await getCountriesFromDB();

  if (!countries) {
    return new Response('Countries not found', { status: 404 });
  }

  return new Response(JSON.stringify(countries));
}

export const GET = async () => {
  return await getAllCountries();
};

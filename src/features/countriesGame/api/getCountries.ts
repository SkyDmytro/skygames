import dbConnect from '@/lib/mongoose';

import Country from '../models/country';

export default async function getCountriesFromDB() {
  await dbConnect();

  try {
    const countries = await Country.find({});

    return countries;
  } catch (error) {
    return error;
  }
}

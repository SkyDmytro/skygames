import dbConnect from '@/lib/mongoose';

import Country from '../models/country';
import { CountryType } from '../types/countryType';

export default async function getCountryById(
  countryiId: number,
): Promise<CountryType | string> {
  await dbConnect();

  try {
    const country = await Country.find({ id: countryiId });

    return country[0];
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}

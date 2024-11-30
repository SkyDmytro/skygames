import { API_URL } from '@/utils/config';

export const getContryByIdRequest = async (countryId: number) => {
  try {
    const response = await fetch(`${API_URL}/countries/${countryId}`);
    console.log(response, countryId);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

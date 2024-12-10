import { API_URL } from '@/utils/config';

export const getWordById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/words/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

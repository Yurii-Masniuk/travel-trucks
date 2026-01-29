import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export interface FilterParams {
  location?: string;
  type?: string;
  equipment?: string[];
}

export const getCampers = async (page = 1, limit = 4, filters: FilterParams = {}) => {
  const params: Record<string, string | number | boolean> = { page, limit };

  if (filters.location) params.location = filters.location;
  
  if (filters.type) {
    params.form = filters.type === 'Fully Integrated' ? 'fullyIntegrated' : filters.type.toLowerCase();
  }

  if (filters.equipment && filters.equipment.length > 0) {
    filters.equipment.forEach((item) => {
      if (item === 'AC') params.AC = true;
      if (item === 'Automatic') params.transmission = 'automatic';
      if (item === 'Kitchen') params.kitchen = true;
      if (item === 'TV') params.TV = true;
      if (item === 'Shower') params.bathroom = true; 
    });
  }

  try {
    const response = await api.get('/campers', { params });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      return [];
    }
    throw error;
  }
};

export const getCamperById = async (id: string) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper details", error);
    return null;
  }
};

export default api;

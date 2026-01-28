import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getCampers = async (page: number = 1, limit: number = 4) => {
  const response = await api.get(`/campers?page=${page}&limit=${limit}`);
  return response.data; 
};

export default api;
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/**
 * Fetch paginated batches with optional search and filters.
 * @param {{ page?: number, limit?: number, search?: string, status?: string, centre?: string }} params
 */
export const fetchBatches = async (params = {}) => {
  const response = await api.get('/batches', {
    params: {
      page: params.page || 1,
      limit: params.limit || 5,
      search: params.search || '',
      status: params.status || '',
      centre: params.centre || '',
    },
  });

  return response.data;
};

/** Fetch distinct centre names for the filter dropdown. */
export const fetchCentres = async () => {
  const response = await api.get('/centres');
  return response.data;
};

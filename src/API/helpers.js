import axios from 'axios';

import { API_BASE_URL } from './constants';

export async function apiRequest(url) {
  try {
    const {
      data: { details },
    } = await axios.get(`${API_BASE_URL}/${url}`);

    return details;
  } catch (error) {
    throw error;
  }
}

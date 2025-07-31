import axios from 'axios';

const BASE_URL = 'https://qfex.com/api';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`[Response Error] ${error.response.status}`, error.response.data);
    } else {
      console.error('[Network Error]', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
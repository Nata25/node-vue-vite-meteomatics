import axios from 'axios';
import { getToken } from '../api/get-token';

const axiosInstance = axios.create({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const TOKEN_KEY = 'weather_token';

axiosInstance.interceptors.request.use(function (req) {
  let token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    req = {
      ...req,
      params: {
        access_token: token,
      }
    }
  }
  return req;
});

axiosInstance.interceptors.response.use(function (res) {
  return res;
}, async function (error) {
  if (error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;
    await getToken();
    return axiosInstance(error.config);
  }
  else {
    return Promise.reject(error.response?.data);
  }
});

export default axiosInstance;

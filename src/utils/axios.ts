import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://localhost:3000',
});
import axios from 'axios';

export const request = axios.create({
  timeout: 8000,
  baseURL: '/',
});

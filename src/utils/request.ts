import axios from 'axios';

console.log(process.env);

export const request = axios.create({
  timeout: 8000,
  baseURL: '/api/v1',
});

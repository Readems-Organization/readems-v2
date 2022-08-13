import axios from 'axios';

export const baseURL = 'http://localhost:5000/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return req;
});

export const waitlistsRegister = (waitlistsData) =>
  API.post('/users/waitlists', waitlistsData);

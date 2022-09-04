import axios from 'axios';

export const baseURL =
  process.env.REACT_APP_BACKEND_API || 'http://localhost:5000';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return req;
});

export const waitlistsRegister = (waitlistsData) =>
  API.post('/api/users/waitlists', waitlistsData);

// export const translate = API.get(
//   'http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate',
// );

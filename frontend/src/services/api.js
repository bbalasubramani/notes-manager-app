import axios from 'axios';

const API = axios.create({
  baseURL: 'https://notes-manager-api.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = (userData) => API.post('/auth/register', userData); 
export const login = (userData) => API.post('/auth/login', userData);    
export const checkAuthStatus = () => API.get('/auth/status');              

export const getNotes = () => API.get('/notes');                           
export const createNote = (noteData) => API.post('/notes', noteData);      
export const updateNote = (id, noteData) => API.put(`/notes/${id}`, noteData); 
export const deleteNote = (id) => API.delete(`/notes/${id}`);             

export default API;
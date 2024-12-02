import axios from 'axios';

const api = axios.create({
    baseURL: 'https://trokstok.onrender.com/api/'
});

export default api;

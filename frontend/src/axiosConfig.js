import axios from 'axios';

const backend = process.env.SERVER_PORT;

const api = axios.create({
    baseURL: backend,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default api;
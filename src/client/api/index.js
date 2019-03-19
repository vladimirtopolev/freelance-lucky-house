import axios from 'axios';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});

export function getProperties() {
    return clientApi.get(`${API_URL_PREFIX}/properties`);
}
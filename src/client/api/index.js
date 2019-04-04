import axios from 'axios';


const API_URL_PREFIX = '/api';
const MODULE_TABLE_DOMAIN = 'moduletable';

const clientApi = axios.create({
    baseURL: window.location.origin
});

export function getProperties() {
    return clientApi.get(`${API_URL_PREFIX}/properties`);
}

export function getTable(tableName) {
    return clientApi.get(`${API_URL_PREFIX}/${MODULE_TABLE_DOMAIN}/${tableName}`);
}

export function getTableRow(tableName, rowId) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${rowId}`);
}

export function orderCall(callDescriptions) {
    return clientApi.post(`/api/orderCall`, callDescriptions )
}

export function subscribe(subscription) {
    return clientApi.post('/api/subscribe', subscription)
}
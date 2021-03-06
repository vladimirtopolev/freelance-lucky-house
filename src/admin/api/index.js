import axios from 'axios';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});


// UPLOAD IMAGE
export function uploadImage(body) {
    return clientApi.post(`/api/image-upload`, body);
}

// PROPERTIES
export function getProperties() {
    return clientApi.get(`${API_URL_PREFIX}/properties`);
}

export function changePropertyValue(propName, value) {
    return clientApi.post(`${API_URL_PREFIX}/properties/${propName}`, { value });
}


// MODULE TABLE
const MODULE_TABLE_DOMAIN = 'moduletable';

export function getTable(tableName) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}`);
}

export function getTableHeaders(tableName) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/headers`);
}

export function getTableRows(tableName) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows`);
}

export function getTableRow(tableName, rowId) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${rowId}`);
}

export function updateCells(tableName, cells) {
    return clientApi.put(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/cells`, cells);
}

export function saveTableRow(tableName, row) {
    return clientApi.post(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows`, row);
}

export function updateTableRow(tableName, idRow, row) {
    return clientApi.put(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${idRow}`, row);

}

export function deleteTableRow(tableName, idRow) {
    return clientApi.delete(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${idRow}`);
}

// ORDERED CALLS
export function getOrderedCalls() {
    return clientApi.get('/api/orderCall');
}

export function createNewOrderedCall(newOrderedCall) {
    return clientApi.post('/api/orderCall', newOrderedCall);
}


export function changeOrderedCall(callId, changedFileds) {
    return clientApi.put(`/api/orderCall/${callId}`, changedFileds)
}

export function deleteOrderedCall(callId) {
    return clientApi.delete(`/api/orderCall/${callId}`)
}


// GOOGLE ANALYTICS
export function getReport(reportName, startDate, endDate) {
    const queryParams = (startDate && endDate)
        ? `?startDate=${startDate}&endDate=${endDate}` : '';
    return clientApi.get(`/api/google-analytics/${reportName}${queryParams}`)
}

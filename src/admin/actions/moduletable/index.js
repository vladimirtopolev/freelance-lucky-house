import { normalize } from 'normalizr';

import { headers, rows, row, table } from '../../schema/adminTable'
import {
    FETCH_ADMIN_TABLE,
    FETCH_ADMIN_TABLE_HEADERS,
    FETCH_ADMIN_TABLE_ROWS,
    FETCH_ADMIN_TABLE_ROW,
    NEW_ADMIN_TABLE_ROW,
    UPDATE_ADMIN_TABLE_ROW,
    DELETE_ADMIN_TABLE_ROW
} from './type';

import * as api from '../../api';

export function fetchTable(tableName){
    return dispatch => {
        return api.getTable(tableName)
            .then(res => {
                dispatch({
                    type: FETCH_ADMIN_TABLE,
                    payload: {
                        tableName,
                        response: normalize(res.data, table)
                    }
                })
            })
    }
}

export function fetchTableHeaders(tableName) {
    return dispatch => {
        return api.getTableHeaders(tableName)
            .then(res => {
                dispatch({
                    type: FETCH_ADMIN_TABLE_HEADERS,
                    payload: {
                        tableName,
                        response: normalize(res.data, headers)
                    }
                });
            });
    }
}

export function fetchTableRows(tableName) {
    return dispatch => (
        api.getTableRows(tableName)
            .then(res => {
                dispatch({
                    type: FETCH_ADMIN_TABLE_ROWS,
                    payload: {
                        tableName,
                        response: normalize(res.data, rows)
                    }
                });
            })
    )
}

export function fetchTableRow(tableName, rowId) {
    return dispatch => {
        api.getTableRow(tableName, rowId)
            .then(res => {
                dispatch({
                    type: FETCH_ADMIN_TABLE_ROW,
                    payload: {
                        tableName,
                        response: normalize(res.data, row)
                    }
                })
            })
    }
}

export function saveTableRow(tableName, newRow) {
    return dispatch => {
        api.saveTableRow(tableName, newRow)
            .then(res => {
                dispatch({
                    type: NEW_ADMIN_TABLE_ROW,
                    payload: {
                        tableName,
                        response: normalize(res.data, row)
                    }
                });
            })
    }
}

export function updateTableRow(tableName, idRow, newRow) {
    return dispatch => {
        api.updateTableRow(tableName, idRow, newRow)
            .then(res => {
                dispatch({
                    type: UPDATE_ADMIN_TABLE_ROW,
                    payload: {
                        tableName,
                        response: normalize(res.data, row)
                    }
                })
            })
    }
}

export function deleteTableRow(tableName, idRow) {
    return dispatch => {
        api.deleteTableRow(tableName, idRow)
            .then(res => {
                dispatch({
                    type: DELETE_ADMIN_TABLE_ROW,
                    payload: {
                        tableName,
                        idRow: idRow
                    }
                });
            })
    }
}
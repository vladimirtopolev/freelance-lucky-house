import * as api from '../../api';
import { normalize } from 'normalizr';

import { FETCH_MODULE_TABLE, FETCH_MODULE_TABLE_ROW } from './type';
import { row, table } from '../../../admin/schema/adminTable';


export function fetchModuleTable(tableName) {
    return dispatch => {
        return api.getTable(tableName)
            .then(res => {
                dispatch({
                    type: FETCH_MODULE_TABLE,
                    payload: {
                        tableName,
                        response: normalize(res.data, table)
                    }
                });
            })
    }
}

export function fetchModuleTableItem(tableName, rowId){
    return dispatch => {
        return api.getTableRow(tableName, rowId)
            .then(res => {
                dispatch({
                    type: FETCH_MODULE_TABLE_ROW,
                    payload: {
                        tableName,
                        response: normalize(res.data, row)
                    }
                })
            })
    }
}

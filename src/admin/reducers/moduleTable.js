import {
    FETCH_ADMIN_TABLE,
    FETCH_ADMIN_TABLE_HEADERS,
    FETCH_ADMIN_TABLE_ROWS,
    FETCH_ADMIN_TABLE_ROW,
    NEW_ADMIN_TABLE_ROW,
    UPDATE_ADMIN_TABLE_ROW,
    DELETE_ADMIN_TABLE_ROW
} from '../actions/moduletable/type';

const INIT_STATE = {
    test: {
        headers: [],
        idHeaders: [],
        rows: [],
        idRows: []
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_ADMIN_TABLE: {
            const table = action.payload.response.entities.table[action.payload.response.result];
            return {
                ...state,
                [action.payload.tableName]: {
                    headers: action.payload.response.entities.headers,
                    rows: action.payload.response.entities.rows,
                    cells: action.payload.response.entities.cells,
                    title: table.title,
                    idHeaders: table.headers,
                    idRows: table.rows
                }
            }
        }

        case FETCH_ADMIN_TABLE_HEADERS: {
            const newTableItem =
                {
                    ...state[action.payload.tableName],
                    ...action.payload.response.entities,
                    idHeaders: action.payload.response.result
                };
            newTableItem.idRows = newTableItem.idRows || [];
            newTableItem.rows = newTableItem.rows || [];
            return {
                ...state,
                [action.payload.tableName]: newTableItem
            }
        }
        case FETCH_ADMIN_TABLE_ROWS: {
            return {
                ...state,
                [action.payload.tableName]: {
                    ...state[action.payload.tableName],
                    ...action.payload.response.entities,
                    idRows: action.payload.response.result
                }
            }
        }
        case FETCH_ADMIN_TABLE_ROW: {
            const table = state[action.payload.tableName];
            const entities = action.payload.response.entities;
            const cells = { ...table.cells, ...entities.cells };
            const headers = { ...table.headers, ...entities.headers };
            const rows = { ...table.rows, ...entities.rows };

            return {
                ...state,
                [action.payload.tableName]: {
                    ...state[action.payload.tableName],
                    headers,
                    rows,
                    cells
                }
            }
        }
        case NEW_ADMIN_TABLE_ROW: {
            const table = state[action.payload.tableName];
            const entities = action.payload.response.entities;
            const cells = { ...table.cells, ...entities.cells };
            const rows = { ...table.rows, ...entities.rows };
            const idRows = table.idRows.concat(action.payload.response.result)
            return {
                ...state,
                [action.payload.tableName]: {
                    ...state[action.payload.tableName],
                    rows,
                    cells,
                    idRows
                }
            }
        }
        case UPDATE_ADMIN_TABLE_ROW: {
            const table = state[action.payload.tableName];
            const entities = action.payload.response.entities;
            const cells = { ...table.cells, ...entities.cells };
            const rows = { ...table.rows, ...entities.rows };

            return {
                ...state,
                [action.payload.tableName]: {
                    ...state[action.payload.tableName],
                    rows,
                    cells
                }
            }
        }
        case DELETE_ADMIN_TABLE_ROW: {
            const table = state[action.payload.tableName];
            const idRows = table.idRows.filter(idRow => idRow !== action.payload.idRow)

            return {
                ...state,
                [action.payload.tableName]: {
                    ...state[action.payload.tableName],
                    idRows
                }
            };
        }
        default: {
            return state
        }
    }
}

export function getTable(tableName, state) {
    return state.moduleTable[tableName] || {
        headers: [],
        idHeaders: [],
        rows: [],
        idRows: [],
    };
}

export function getTableTitle(tableName, state) {
    return getTable(tableName, state).title;
}

export function getTableHeaders(tableName, state) {
    const table = getTable(tableName, state);
    return table.idHeaders.map(id => table.headers[id]);
}

export function getTableRows(tableName, state) {
    const table = getTable(tableName, state);
    return table.idRows.map(id => {
        return getTableRow(tableName, id, state);
    });
}

export function getTableRow(tableName, rowId, state) {
    const table = getTable(tableName, state);
    const headers = getTableHeaders(tableName, state);

    let row = table.rows[rowId];
    if (!row) {
        return row;
    }
    row = { ...row };
    row.cells = row.cells.map(cellId => {
        return {
            ...table.cells[cellId],
            type: headers.find(header => header._id === table.cells[cellId].type)
        };
    });
    return row;
}
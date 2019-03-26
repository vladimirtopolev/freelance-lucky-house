import { FETCH_MODULE_TABLE, FETCH_MODULE_TABLE_ROW } from "../actions/module/type";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MODULE_TABLE: {
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

        case FETCH_MODULE_TABLE_ROW: {
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

        default:
            return state;
    }
};


export function getModuleTable(moduleName, state) {
    return state.module[moduleName] || {
        headers: [],
        idHeaders: [],
        rows: {},
        idRows: [],
    };
}

export function getModuleRow(moduleName, rowId, state) {
    const table = getModuleTable(moduleName, state);
    const row = table.rows[rowId];
    const cells = row.cells
        .map(cellId => table.cells[cellId])
        .map(cell => ({ ...cell, type: table.headers[cell.type] }));
    return Object.assign({}, row, { cells });
}

export function getModuleRows(moduleName, state) {
    const table = getModuleTable(moduleName, state);
    const tableRows = table.rows;

    return Object.keys(tableRows)
        .map(rowId => {
            return getModuleRow(moduleName, rowId, state);
        });
}


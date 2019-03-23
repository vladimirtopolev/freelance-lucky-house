import { FETCH_MODULE_TABLE } from "../actions/module/type";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MODULE_TABLE: {
            const { moduleName, response } = action.payload;
            return {
                ...state,
                [moduleName]: response
            };
        }
        default:
            return state;
    }
};


export function getModuleTable(moduleName, state) {
    return state.module[moduleName] || {
        headers: [],
        rows: [],
        name: moduleName,
        title: ''
    };
}

export function getModuleRows(moduleName, state) {
    return getModuleTable(moduleName, state).rows;
}


import * as api from '../../api';
import { FETCH_MODULE_TABLE } from './type';


export function fetchModuleData(moduleName) {
    return dispatch => {
        return api.getTable(moduleName)
            .then(res => {
                dispatch({
                    type: FETCH_MODULE_TABLE,
                    payload: {
                        moduleName,
                        response: res.data
                    }
                });
            })
    }
}

import * as api from '../../api'
import {FETCH_PROPERTIES} from './type';

export const fetchProperties = () =>
    dispatch =>
        api.getProperties()
            .then(res => {
                dispatch({
                    type: FETCH_PROPERTIES,
                    payload: res.data
                })
            });

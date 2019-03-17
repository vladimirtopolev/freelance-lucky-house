import * as api from '../../api'
import {FETCH_PROPERTIES, CHANGE_PROPERTY_VALUE} from './type';

export const fetchProperties = () =>
    dispatch =>
        api.getProperties()
            .then(res => {
                dispatch({
                    type: FETCH_PROPERTIES,
                    payload: res.data
                })
            });

export const changePropertyValue = (propName, value) =>
    dispatch =>
        api.changePropertyValue(propName, value)
            .then(res => {
                dispatch({
                    type: CHANGE_PROPERTY_VALUE,
                    payload: res.data
                })
            });

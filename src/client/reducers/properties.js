import {FETCH_PROPERTIES} from '../actions/properties/type';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES: {
            return action.payload;
        }
        default:
            return state;
    }
};

export function getProperties(state) {
    return state.properties;
}
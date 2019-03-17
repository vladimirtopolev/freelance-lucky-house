import {FETCH_PROPERTIES, CHANGE_PROPERTY_VALUE} from '../actions/properties/type';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES: {
            return action.payload;
        }
        case CHANGE_PROPERTY_VALUE: {
            return state.map(property => {
                return property.internalName === action.payload.internalName
                    ? action.payload
                    : property
            });
        }
        default:
            return state;
    }
};

export function getProperties(state) {
    return state.properties;
}
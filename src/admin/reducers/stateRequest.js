import _ from 'lodash';
const initialState = {};

const PREFIX = 'REQUEST';
const SUCCESS_SUFFIX = 'SUCCESS';
const FAIL_SUFFIX = 'FAIL';

// FETCH types with patterns:
// REQUEST_ANY_SPECIFIC_NAME
// REQUEST_ANY_SPECIFIC_NAME_SUCCESS
// REQUEST_ANY_SPECIFIC_NAME_FAIL
export default (state = initialState, action) => {
    const words = action.type.split('_');

    const prefix = words[0];
    const suffix = words[words.length -1];

    if (prefix !== PREFIX) {
        return state;
    }

    if (suffix !== SUCCESS_SUFFIX && suffix !== FAIL_SUFFIX) {
        return {
            ...state,
            [action.type]: {
                isLoading: true,
                fail: false
            }
        }
    }

    const key = action.type.replace(`_${suffix}`, '');

    if (suffix === SUCCESS_SUFFIX) {
        return {
            ...state,
            [key]: {
                isLoading: false,
                fail: false
            }
        }
    }

    if (suffix === FAIL_SUFFIX) {
        return {
            ...state,
            [key]: {
                isLoading: false,
                fail: true
            }
        }
    }
};

export function getIsLoadingStatus(actionTypes, state) {
    return _.castArray(actionTypes)
        .every(type => _.get(state, `stateRequest.${type}.isLoading`, true));

}

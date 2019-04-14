import { combineReducers } from 'redux';

import auth from './auth';
import properties from './properties';
import moduleTable from './moduleTable';
import stateRequest from './stateRequest';

export default combineReducers({
    auth,
    properties,
    moduleTable,
    stateRequest
});

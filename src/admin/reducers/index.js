import { combineReducers } from 'redux';

import auth from './auth';
import properties from './properties';
import moduleTable from './moduleTable'

export default combineReducers({
    auth,
    properties,
    moduleTable
});
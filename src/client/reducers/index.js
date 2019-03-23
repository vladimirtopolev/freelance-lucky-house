import { combineReducers } from 'redux';

import properties from './properties';
import module from './module';

export default combineReducers({
    properties,
    module
});
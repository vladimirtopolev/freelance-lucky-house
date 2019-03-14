import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


function extractPersistedData() {
    return {};
}


export default function configStore() {
    const store = createStore(
        reducers,
        extractPersistedData(),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
}
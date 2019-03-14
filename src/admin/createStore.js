import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwt from 'jsonwebtoken';
import reducers from './reducers';
import setAuthToken from './utilities/setAuthToken';


function extractPersistedData() {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        setAuthToken(token);
        const payload = jwt.decode(token);
        return {
            auth: payload.user || null
        };
    }
}


export default function configStore() {
    const store = createStore(
        reducers,
        extractPersistedData(),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
}
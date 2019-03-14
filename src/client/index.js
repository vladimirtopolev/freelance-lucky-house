import React from 'react';
import { Provider } from 'react-redux'

import createStore from './createStore';
import App from './components/App';

const store = createStore();

export default () => (
    <Provider store={store}>
        <App/>
    </Provider>
);


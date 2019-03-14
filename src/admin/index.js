import React from 'react';
import {Provider} from 'react-redux'

import createStore from './createStore';
import AdminPanel from './components/AdminPanel';

const store = createStore();

export default () => (
    <Provider store={store}>
        <AdminPanel/>
    </Provider>
);


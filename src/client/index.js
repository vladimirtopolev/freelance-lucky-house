import React from 'react';
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import createStore from './createStore';
import Main from './components/Main/Main';
import Layout from './components/Layout/Layout';

const store = createStore();

export default () => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/" component={Layout}/>
        </Switch>
    </Provider>
);


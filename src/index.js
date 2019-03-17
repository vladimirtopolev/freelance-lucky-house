import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Admin from './admin';
import Client from './client';
import { ADMIN_URL } from './admin/constants';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`/${ADMIN_URL}`} component={Admin}/>
            <Route path="/" component={Client}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import withTracker from './client/components/common/withTracker';

import Admin from './admin';
import Client from './client';
import { ADMIN_URL } from './admin/constants';

const App = () => (
    <BrowserRouter>
        <Route component={withTracker(() => {
            return (
                <Switch>

                    <Route path={`/${ADMIN_URL}`} component={Admin}/>
                    <Route path="/" component={Client}/>
                </Switch>
            );
        })}/>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));



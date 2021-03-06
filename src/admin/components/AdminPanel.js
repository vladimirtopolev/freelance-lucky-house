import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {ADMIN_URL} from '../constants'
import SignIn from './auth/SignIn';
import AuthenticatedUser from './common/AuthenticatedUser';
import AdminLayout from './layout/Layout';

export default () => (
    <Switch>
        <Route path={`/${ADMIN_URL}/signin`} component={SignIn}/>
        <Route path={`/${ADMIN_URL}`} component={AuthenticatedUser(AdminLayout)}/>
    </Switch>
)
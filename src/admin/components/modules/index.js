import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ADMIN_TABLE_MODULE_URL, ADMIN_URL } from "../../constants";
import Properties from "./properties/Properties";
import OrderedCalls from "./orderedCalls/OrderedCallsPanel";
import ModuleTable from "./moduleTable/ModuleTable";
import Analytics from './analytics/Analytics';

export default () => {
    return (
        <Switch>
            <Route path={`/${ADMIN_URL}/properties`} component={Properties}/>
            <Route path={`/${ADMIN_URL}/orderedCalls`} component={OrderedCalls}/>
            <Route path={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}`} component={ModuleTable}/>
            <Route path={`/${ADMIN_URL}/analitics`} component={Analytics}/>
        </Switch>)
}
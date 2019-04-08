import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {ADMIN_URL, ADMIN_TABLE_MODULE_URL}  from '../../../constants/index';
import TableContainer from './table/TableContainer';
import RowContainer from './row/RowContainer';

export default class ModuleTable extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/:tableName`} component={TableContainer}/>
                <Route exact path={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/:tableName/rows/:rowId`} component={RowContainer}/>
            </Switch>
        );
    }
}
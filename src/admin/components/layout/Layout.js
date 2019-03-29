import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ADMIN_URL, ADMIN_TABLE_MODULE_URL } from '../../constants'
import styles from './Layout.module.scss';
import Sidebar from './sidebar/Sidebar';

import Properties from '../pages/properties/Properties';
import ModuleTable from '../pages/moduleTable/ModuleTable';
import OrderedCalls from '../pages/orderedCalls/OrderedCalls';

export default () => (
    <div className={styles.layout}>
        <div className={styles.layout__header}>
        </div>
        <div className={styles.layout__content}>
            <Sidebar/>
            <div className={styles.layout__pages}>
                <Switch>
                    <Route path={`/${ADMIN_URL}/properties`} component={Properties}/>
                    <Route path={`/${ADMIN_URL}/orderedCalls`} component={OrderedCalls}/>
                    <Route path={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}`} component={ModuleTable}/>
                </Switch>
            </div>
        </div>
    </div>
)
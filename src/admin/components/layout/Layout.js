import React from 'react';

import styles from './Layout.module.scss';
import Sidebar from './sidebar/Sidebar';

import IncludedModules from '../modules';

export default () => (
    <div className={styles.layout}>
        <div className={styles.layout__header}>
        </div>
        <div className={styles.layout__content}>
            <Sidebar/>
            <div className={styles.layout__pages}>
                <IncludedModules/>
            </div>
        </div>
    </div>
)
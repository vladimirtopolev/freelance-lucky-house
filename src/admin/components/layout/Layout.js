import React from 'react';
import styles from './Layout.module.scss';
import Sidebar from './sidebar/Sidebar';

export default () => (
    <div className={styles.layout}>
        <div className={styles.layout__header}>
        </div>
        <div className={styles.layout__content}>
            <Sidebar />
        </div>
    </div>
)
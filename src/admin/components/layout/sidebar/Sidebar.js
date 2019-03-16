import React from 'react';
import UserView from './UserView';
import Navbar from './Navbar';
import styles from './Sidebar.module.scss';

export default () => (
    <nav className={styles.Sidebar}>
        <UserView />
        <Navbar/>
    </nav>
);
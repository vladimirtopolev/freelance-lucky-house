import React from 'react';
import tableWrapper from '../../table-wrapper.commom.module.scss';

import styles from './Analytics.module.scss';

import CommonAnalytics from './modules/CommonAnalytics';
import SessionDevices from './modules/SessionDevices';
import BrowserSize from './modules/BrowserSize';
import BrowserType from './modules/BrowserType';
import SessionCountry from './modules/SessionCountry'

export default () => {
    return (
        <div>
            <div>
                Анализ за период
                с <input type="date"/>
                по <input type="date"/>
            </div>
            <CommonAnalytics/>
            <div className={styles.Analytics__row}>
                <div className={styles.Analytics__cell}>
                    <SessionDevices/>
                </div>
                <div className={styles.Analytics__cell}>
                    <BrowserSize />
                </div>
                <div className={styles.Analytics__cell}>
                    <BrowserType />
                </div>
            </div>
        </div>
    );
};
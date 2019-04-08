import React from 'react';
import moment from 'moment'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import styles from './Analytics.module.scss';
import 'react-dates/lib/css/_datepicker.css';


import CommonAnalytics from './modules/CommonAnalytics';
import SessionDevices from './modules/SessionDevices';
import BrowserSize from './modules/BrowserSize';
import BrowserType from './modules/BrowserType';
import SessionCountry from './modules/SessionCountry';
import StatisticByPages from './modules/StatisticByPages';

export default () => {
    return (
        <div>
            <div>
                Анализ за период
                с <input type="range"/>
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
                <div className={styles.Analytics__cell}>
                    <SessionCountry />
                </div>
            </div>
            <div>
                <StatisticByPages />
            </div>
        </div>
    );
};
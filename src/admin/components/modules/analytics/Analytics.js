import React, { useState } from 'react';
import styles from './Analytics.module.scss';

import PieContainer from './modules/common/PieContainer';

import DateRangePicker from './modules/DateRangePicker';
import CommonAnalytics from './modules/CommonAnalytics';
import StatisticByPages from './modules/StatisticByPages';
import UsersByDate from './modules/UsersByDate';

import SessionDevicesLegend from './modules/legends/SessionDevicesLegend';
import UserTypeLegend from './modules/legends/UserTypeLegend';
import { subDays } from 'date-fns';

export default () => {
    const [startDate, changeStartDate] = useState(subDays(new Date(), 365));
    const [endDate, changeEndDate] = useState(new Date());

    return (
        <div>
            <div>
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    changeStartDate={changeStartDate}
                    changeEndDate={changeEndDate}
                />
            </div>
            <CommonAnalytics
                startDate={startDate}
                endDate={endDate}
            />
            <div>
                <UsersByDate
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div className={styles.Analytics__row}>
                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionsByDeviceCategory'
                        title='Используемые устройство'
                        legendContent={SessionDevicesLegend}
                    />
                </div>
                <div className={styles.Analytics__cell} style={{ width: 200, maxWidth: 400 }}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionsByUser'
                        title='Распределение сессий'
                        legendContent={UserTypeLegend}
                    />
                </div>
                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='bouncesByUser'
                        title='Число отказов'
                        legendContent={UserTypeLegend}
                    />
                </div>
                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionDurationByUser'
                        title='Длительность сессий'
                        legendContent={UserTypeLegend}
                    />
                </div>
            </div>
            <div className={styles.Analytics__row}>
                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionsByBrowserSize'
                        title='Расширение браузера'
                    />
                </div>

                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionsByBrowserType'
                        title='Тип браузера'
                    />
                </div>

                <div className={styles.Analytics__cell}>
                    <PieContainer
                        startDate={startDate}
                        endDate={endDate}
                        googleReportName='sessionsByCountry'
                        title='Регионы паросмотров'
                    />
                </div>
            </div>
            <div>
                <StatisticByPages
                    startDate={startDate}
                    endDate={endDate}/>
            </div>
        </div>
    );
};

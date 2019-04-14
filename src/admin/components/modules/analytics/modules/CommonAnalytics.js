import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import cn from "classnames";
import styles from "./CommonAnalytics.module.scss";
import Tooltip from "../Tooltip";
import getGoogleReport from './common/hooks/getGoogleReport';
import Spinner from './common/Spinner';

export default ({startDate, endDate}) => {
    const { rawRows, isLoading } = getGoogleReport('commonOverview', startDate, endDate);

    const users = _.get(rawRows, '[0].metrics[0].values[0]', 0);
    const newUsers = _.get(rawRows, '[0].metrics[0].values[1]', 0);
    const sessions = _.get(rawRows, '[0].metrics[0].values[2]', 0);
    const bounce = _.get(rawRows, '[0].metrics[0].values[3]', 0);
    const sessionDuration = _.get(rawRows, '[0].metrics[0].values[4]', 0);


    return isLoading
        ? <Spinner/>
        : (
            <div className={cn(styles.CommonAnalytics)}>
                <div className={cn(styles.CommonAnalytics__item)}>
                    <div className={cn(styles.CommonAnalytics__itemValue)}>{users}</div>
                    <div className={cn(styles.CommonAnalytics__itemTitle)}>Пользователи</div>
                </div>
                <div className={cn(styles.CommonAnalytics__item)}>
                    <Tooltip linkContent={() => <i className="far fa-question-circle"></i>}
                             tooltipContent={() => (
                                 <span>
                                         Новые пользователи за отченый период, за исключением новых
                                        пользователей периода предшествующего отчетному
                                     </span>
                             )}
                             className={cn(styles.CommonAnalytics__help)}
                    />
                    <div className={cn(styles.CommonAnalytics__itemValue)}>{newUsers}</div>
                    <div className={cn(styles.CommonAnalytics__itemTitle)}>Новые пользователи</div>
                </div>
                <div className={cn(styles.CommonAnalytics__item)}>
                    <Tooltip linkContent={() => <i className="far fa-question-circle"></i>}
                             tooltipContent={() => (
                                 <span>
                                         Пользователю не инетересен сайт и он провел на сайте менее 15сек
                                     </span>
                             )}
                             className={cn(styles.CommonAnalytics__help)}
                    />
                    <div className={cn(styles.CommonAnalytics__itemValue)}>{bounce}</div>
                    <div className={cn(styles.CommonAnalytics__itemTitle)}>Число отказов</div>

                </div>
                <div className={cn(styles.CommonAnalytics__item)}>
                    <Tooltip linkContent={() => <i className="far fa-question-circle"></i>}
                             tooltipContent={() => (
                                 <span>
                                         Сессия - последовательность действий пользователя, выполненные с промежутком времени
                                         не менее 30 минут друг от друга
                                     </span>
                             )}
                             className={cn(styles.CommonAnalytics__help)}
                    />
                    <div className={cn(styles.CommonAnalytics__itemValue)}>{sessions}</div>
                    <div className={cn(styles.CommonAnalytics__itemTitle)}>Число сессий</div>

                </div>
                <div className={cn(styles.CommonAnalytics__item)}>
                    <div className={cn(styles.CommonAnalytics__itemValue)}>
                        {moment(moment.duration(Number(sessionDuration), 'seconds').asMilliseconds()).format('mm:ss')}
                    </div>
                    <div className={cn(styles.CommonAnalytics__itemTitle)}>Среднее время на сайте</div>
                </div>
            </div>
        );
}

import React from 'react';
import cn from "classnames";
import styles from "./CommonAnalytics.module.scss";
import Tooltip from "../Tooltip";

export default () => {
    return (
        <div className={cn(styles.CommonAnalytics)}>
            <div className={cn(styles.CommonAnalytics__item)}>
                <div className={cn(styles.CommonAnalytics__itemTitle)}>Число пользователей</div>
                <div className={cn(styles.CommonAnalytics__itemValue)}>12</div>
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
                <div className={cn(styles.CommonAnalytics__itemTitle)}>Число новых пользователей</div>
                <div className={cn(styles.CommonAnalytics__itemValue)}>12</div>
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
                <div className={cn(styles.CommonAnalytics__itemTitle)}>Число отказов</div>
                <div className={cn(styles.CommonAnalytics__itemValue)}>12</div>
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
                <div className={cn(styles.CommonAnalytics__itemTitle)}>Число сессий</div>
                <div className={cn(styles.CommonAnalytics__itemValue)}>12</div>
            </div>
            <div className={cn(styles.CommonAnalytics__item)}>
                <div className={cn(styles.CommonAnalytics__itemTitle)}>Среднее время на сайте</div>
                <div className={cn(styles.CommonAnalytics__itemValue)}>12</div>
            </div>
        </div>
    );
}
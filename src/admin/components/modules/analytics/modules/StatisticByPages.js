import React, { useEffect } from 'react';
import './common/hooks/getGoogleReport'
import getGoogleReport from './common/hooks/getGoogleReport';
import reportModuleStyles from './ReportModule.module.scss';
import Spinner from './common/Spinner'
import moment from "moment";

const excludedPagePaths = [
    '/admin',
    '/api',
    '/sockjs-node'
];

export default ({ startDate, endDate }) => {

    const { rawRows, isLoading } = getGoogleReport('pageViewsByPagePath', startDate, endDate);

    const filteredDimensions = rawRows.filter(dimensionRow => {
        const dimension = dimensionRow.dimensions[0];
        return !excludedPagePaths.some(excludedPagePath => dimension.includes(excludedPagePath))
    });
    return (
        <div className={reportModuleStyles.ReportModule}>
            <div className={reportModuleStyles.ReportModule__title}>Статистика просмотров страниц</div>
            <div className={reportModuleStyles.ReportModule__content}>
                {isLoading
                    ? <Spinner/>
                    : (
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Страница</th>
                                <th>Число просмотров</th>
                                <th>Число уникальных просмотров</th>
                                <th>Среднее время просмотра</th>
                                <th>Число входов</th>
                                <th>Число выходов</th>
                                <th>Число просмотров в сессию</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredDimensions
                                .map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.dimensions[0]}</td>
                                            <td>{item.metrics[0].values[0]}</td>
                                            <td>{item.metrics[0].values[1]}</td>
                                            <td>
                                                {moment(moment.duration(Number(item.metrics[0].values[2]), 'seconds').asMilliseconds()).format('mm:ss')}
                                            </td>
                                            <td>{item.metrics[0].values[3]}</td>
                                            <td>{item.metrics[0].values[4]}</td>
                                            <td>{item.metrics[0].values[5]}</td>


                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    );
}

import React, { useEffect } from 'react';
import './common/hooks/getGoogleReport'
import getGoogleReport from './common/hooks/getGoogleReport';

export default (props) => {

    const { rawRows, isLoading } = getGoogleReport('pageViewsByPagePath');
    console.log('rawData', rawRows);
    return (
        <table>
            <thead>
            <tr>
                <th>Страница</th>
                <th>Число просмотров</th>
                <th>Время на странице</th>
                <th>Число уникальных просмотров</th>
            </tr>
            </thead>
            <tbody>
            {rawRows
                .map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.dimensions[0]}</td>
                        <td>{item.metrics[0].values[0]}</td>
                        <td>{item.metrics[0].values[1]}</td>
                        <td>{item.metrics[0].values[2]}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
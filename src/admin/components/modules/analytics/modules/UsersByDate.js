import React from 'react';
import moment from 'moment';
import getGoogleReport from './common/hooks/getGoogleReport'
import * as V from 'victory';
import _ from 'lodash';

import { VictoryChart, VictoryStack, VictoryArea, VictoryAxis } from 'victory';


export default ({ startDate, endDate }) => {

    const { rawRows, isLoading } = getGoogleReport('usersByDate', startDate, endDate);

    console.log(isLoading, rawRows);

    if (rawRows.length > 2) {
        const startRange = moment(rawRows[0].dimensions[0], 'YYYYMMDD');
        const endRange = moment(rawRows[rawRows.length - 1].dimensions[0], 'YYYYMMDD');

        const countDays = endRange.diff(startRange, 'days');

        const timeRange = new Array(countDays).fill(0).reduce((memo, item) => {
            return memo.concat(memo[memo.length - 1].clone().add(1, 'days'));
        }, [startRange]);

        console.log('TIMERANGE', timeRange);
        const data = timeRange.reduce((memo, time) => {
            console.log(time);
            const timeDate = time.format('YYYYMMDD');
            const metrics = _.get(rawRows.find(row => row.dimensions[0] === timeDate), 'metrics[0].values');
            return {
                users: memo.users.concat({ x: time.format('DD/MM/YYYY'), y: metrics ? +metrics[0] : 0 }),
                newUsers: memo.users.concat({ x: time.format('DD/MM/YYYY'), y: metrics ? +metrics[1] : 0 }),
            }
        }, { users: [], newUsers: [] });

        return (
            <VictoryChart>
                <VictoryAxis/>
                <VictoryAxis dependentAxis />
                <VictoryStack>
                    <VictoryArea
                        data={data.users}
                    />
                    <VictoryArea
                        data={data.newUsers}
                    />
                </VictoryStack>
            </VictoryChart>
        );
    }
    return 'HERE';

}
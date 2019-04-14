import { useEffect, useState } from 'react';
import * as api from '../../../../../../api';
import _ from 'lodash';
import moment from "moment";

export default function getGoogleReport(googleReportName, startDate, endDate) {
    const [rawRows, setData] = useState([]);
    const [isLoading, toggleLoadingState] = useState(false);

    const startDateRange = moment(startDate).format('YYYY-MM-DD');
    const endDateRange = moment(endDate).format('YYYY-MM-DD');

    useEffect(() => {
        toggleLoadingState(true);
        api.getReport(googleReportName, startDateRange, endDateRange)
            .then(res => {
                toggleLoadingState(false);
                setData(_.get(res, 'data.data.reports[0].data.rows', []));
            })
            .catch(err => {
                toggleLoadingState(false);
            })
    }, [startDate, endDate]);
    return { rawRows, isLoading }
}

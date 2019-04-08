import { useEffect, useState } from 'react';
import * as api from '../../../../../../api';
import _ from 'lodash';

export default function getGoogleReport(googleReportName) {
    const [rawRows, setData] = useState([]);
    const [isLoading, toggleLoadingState] = useState(false);

    useEffect(() => {
        toggleLoadingState(true);
        api.getReport(googleReportName)
            .then(res => {
                toggleLoadingState(false);
                setData(_.get(res, 'data.data.reports[0].data.rows', []));
            })
            .catch(err => {
                toggleLoadingState(false);
            })
    }, []);
    return { rawRows, isLoading }
}
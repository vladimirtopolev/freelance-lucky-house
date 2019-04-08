import React, { useEffect } from 'react';
import * as api from "../../../../api";


export default (props) => {
    useEffect(() => {
        api.getReport('pageViewsByPagePath')
            .then(res => {
                setData(_.get(res, 'data.data.reports[0].data.rows', []));
                console.log('RES', res);
            })
    }, []);
}
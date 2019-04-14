import React, { Fragment } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as V from 'victory';
import _ from 'lodash';

import { COLOR_SCALE } from '../constants';
import { VictoryPie, VictoryTooltip } from 'victory';
import Spinner from './Spinner';

import styles from './PieComponent.module.scss';
import getGoogleReport from './hooks/getGoogleReport';

export default function PieComponent(
    {
        startDate,
        endDate,
        legendContent,
        maxSegments,
        colorScale,
        innerRadius,
        pieContainerClassName,
        padAngle,
        googleReportName,
        isHorizontal
    }) {

    const { rawRows, isLoading } = getGoogleReport(googleReportName, startDate, endDate);


    const processedData = _(rawRows)
        .orderBy(['metrics[0].values[0]'], ['desc'])
        .value()
        .reduce((memo, row, i) => {
            const value = +row.metrics[0].values[0];
            return i < maxSegments
                ? [...memo, { x: row.dimensions[0], y: value }]
                : memo.length === maxSegments
                    ? [...memo, { x: 'Others', y: value }]
                    : memo.slice(0, maxSegments).concat(_.set(_.last(memo), 'y', _.last(memo).y + 1));
        }, []);

    return (
        <div className={cn(styles.PieComponent, { [styles.PieComponent__horizonal]: isHorizontal })}>
            {isLoading
                ? <Spinner/>
                : (
                    <Fragment>
                        <div className={styles.PieComponent__pieContainer}>
                            <VictoryPie
                                data={processedData}
                                colorScale={colorScale}
                                innerRadius={innerRadius}
                                padAngle={padAngle}
                                labelPosition={'centroid'}
                                padding={10}
                            />
                        </div>
                        {legendContent && (
                            <div className={styles.PieComponent__legend}>
                                {legendContent({ colorScale, processedData })}
                            </div>
                        )}
                    </Fragment>
                )}
        </div>
    );
}

PieComponent.propTypes = {
    googleReportName: PropTypes.oneOf([
        'sessionsByDeviceCategory',
        'sessionsByBrowserSize',
        'sessionsByBrowserType'
    ]).isRequired,
    pieContainerClassName: PropTypes.string,
    legendContent: PropTypes.func,
    maxSegments: PropTypes.number,
    colorScale: PropTypes.arrayOf(PropTypes.string),
    innerRadius: PropTypes.number,
    padAngle: PropTypes.number
};

PieComponent.defaultProps = {
    maxSegments: 5,
    colorScale: COLOR_SCALE,
    innerRadius: 0,
    padAngle: 0,
    pieContainerClassName: ''
};

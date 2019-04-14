import React from 'react';
import PieComponent from './PieComponent';
import PieDefaultLegendComponent from './PieDefaultLegendComponent'

import reportModuleStyles from '../ReportModule.module.scss';
import { COLOR_SCALE } from "../constants";

export default ({
                    startDate,
                    endDate,
                    googleReportName,
                    title,
                    innerRadius,
                    colorScale,
                    isHorizontal,
                    padAngle,
                    legendContent
                }) => {
    return (
        <div className={reportModuleStyles.ReportModule}>
            <div className={reportModuleStyles.ReportModule__title}>{title}</div>
            <div className={reportModuleStyles.ReportModule__content}>
                <PieComponent
                    startDate={startDate}
                    endDate={endDate}
                    innerRadius={innerRadius}
                    padAngle={padAngle}
                    isHorizontal={isHorizontal}
                    googleReportName={googleReportName}
                    legendContent={legendContent}
                />
            </div>
        </div>
    );
}

PieComponent.defaultProps = {
    maxSegments: 5,
    colorScale: COLOR_SCALE,
    innerRadius: 100,
    padAngle: 0,
    pieContainerClassName: '',
    isHorizontal: true,
    legendContent: PieDefaultLegendComponent
};

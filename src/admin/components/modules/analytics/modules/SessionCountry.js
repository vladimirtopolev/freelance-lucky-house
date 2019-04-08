import React from 'react';
import PieComponent from './common/PieComponent';
import PieDefaultLegendComponent from './common/PieDefaultLegendComponent'

import reportModuleStyles from './ReportModule.module.scss';

export default () => {
    return (
        <div className={reportModuleStyles.ReportModule}>
            <div className={reportModuleStyles.ReportModule__title}>Регионы паросмотров</div>
            <div className={reportModuleStyles.ReportModule__content}>
                <PieComponent innerRadius={100}
                              padAngle={1}
                              isHorizontal={true}
                              googleReportName={'sessionsByCountry'}
                              legendContent={PieDefaultLegendComponent}
                />
            </div>
        </div>
    );
}
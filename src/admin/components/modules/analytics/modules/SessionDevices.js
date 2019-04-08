import React from 'react';
import PieComponent from './common/PieComponent';
import _ from 'lodash';

import reportModuleStyles from './ReportModule.module.scss';
import styles from './SessionDevices.module.scss';

const legendMap = {
    'desktop': {
        name: 'Десктоп',
        className: 'fas fa-desktop'
    },
    'tablet': {
        name: 'Планшеты',
        className: 'fas fa-tablet-alt'
    },
    'mobile': {
        name: 'Телефон',
        className: 'fas fa-mobile-alt'
    }
}

export default () => {
    return (
        <div className={reportModuleStyles.ReportModule}>
            <div className={reportModuleStyles.ReportModule__title}>Используемые устройства</div>
            <div className={reportModuleStyles.ReportModule__content}>
                <PieComponent innerRadius={100}
                              isHorizontal={true}
                              padAngle={1}
                              googleReportName={'sessionsByDeviceCategory'}
                              pieContainerClassName={styles.SessionDevices__pieContainer}
                              legendContent={({ colorScale, processedData }) => {
                                  const total = processedData.reduce((sum, row) => sum + row.y, 0);
                                  return (
                                      <div className={styles.Legend}>
                                          {processedData.map((row, i) => {
                                              const legendTemplate = legendMap[row.x] || {
                                                  name: 'Неизвестное устройство',
                                                  className: 'far fa-question-circle'
                                              }
                                              return (
                                                  <div className={styles.Legend__item} key={i}>
                                                      <div className={styles.Legend__itemTitle}>
                                                          {legendTemplate.name}
                                                      </div>
                                                      <div className={styles.Legend__itemIcon} style={{color: colorScale[i]}}>
                                                          <span className={legendTemplate.className}></span>
                                                      </div>
                                                      <div className={styles.Legend__itemValue}>
                                                          {_.round(total ? row.y * 100 / total : 0, 2)}%
                                                      </div>
                                                  </div>
                                              )
                                          })}
                                      </div>
                                  );
                              }}
                />
            </div>
        </div>
    );
}
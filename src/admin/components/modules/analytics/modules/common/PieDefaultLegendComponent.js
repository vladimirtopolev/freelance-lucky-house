import _ from "lodash";
import React from "react";

import styles from './PieDefaultLegendComponent.module.scss';


export default ({ colorScale, processedData }) => {
    const total = processedData.reduce((sum, row) => sum + row.y, 0);
    return (
        <div className={styles.Legend}>
            {
                processedData.map((row, i) => {
                    return (
                        <div className={styles.Legend__item} key={i}>
                            <div className={styles.Legend__itemIconContainer}>
                                <div className={styles.Legend__itemIcon}
                                     style={{ background: colorScale[i] }}></div>
                            </div>
                            <div className={styles.Legend__itemTitle}>
                                {row.x}
                            </div>
                            <div className={styles.Legend__itemValue}>
                                {total ? _.round(row.y * 100 / total, 2) : 0}%
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

}
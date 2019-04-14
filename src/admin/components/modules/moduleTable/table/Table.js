import React from 'react';
import cn from 'classnames';
import Header from './Header';
import Row from './Row';
import { Link } from 'react-router-dom'
import { ADMIN_URL, ADMIN_TABLE_MODULE_URL } from '../../../../constants/index'

import commonStyles from '../../../common.module.scss';
import styles from './Table.module.scss';

export default ({ tableName, tableTitle, headers, rows, deleteRow }) => {
    return (
        <div className={cn(styles.Table, commonStyles.page)}>
            <div className={commonStyles.page__title}>
                {tableTitle}
            </div>
            <div className={commonStyles.page__content}>
                <div className={styles.Table__controlButtons}>
                    <Link to={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${tableName}/rows/new`}
                          className={commonStyles.button}>
                        <span className={cn(commonStyles.button__icon, 'fa fa-plus')}></span>
                        Добавить запись
                    </Link>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        {headers
                            .filter(header => !header.previewHidden)
                            .map((header, i) =>
                            <Header key={i}
                                    tableName={tableName}
                                    {...header}/>)}
                        <th className={styles.Table__actionCell}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row, i) => <Row tableName={tableName}
                                               key={i}
                                               {...row}
                                               deleteRow={deleteRow}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

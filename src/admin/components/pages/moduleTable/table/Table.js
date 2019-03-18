import React from 'react';
import Header from './Header';
import Row from './Row';
import {Link} from 'react-router-dom'
import {ADMIN_URL, ADMIN_TABLE_MODULE_URL} from '../../../../constants'
import './Table.scss';

export default ({tableName, tableTitle, headers, rows, deleteRow}) => {
    return (
        <div className="admin-table">
            <div className="admin-table__title">
                {tableTitle}
            </div>
            <div className="admin-table__control">
                <Link to={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${tableName}/rows/new`}
                      className="btn btn-primary">
                    <span className="fa fa-plus btn__icon"></span>
                    Добавить запись
                </Link>
            </div>
            <div className="admin-table__table">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        {headers.map(header => <Header tableName={tableName} {...header}/>)}
                        <th className="admin-table__action-cell"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map(row => <Row tableName={tableName} {...row} deleteRow={deleteRow}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
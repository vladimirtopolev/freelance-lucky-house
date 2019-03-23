import React from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_URL, ADMIN_TABLE_MODULE_URL } from '../../../../constants'

import getCell from '../../../common/cells/getCell';

import commonStyles from '../../../common.module.scss';
import styles from './Table.module.scss';

export default ({ cells, tableName, _id, deleteRow }) => {
    return (
        <tr>
            {cells.map((cell, i) => (
                <td key={i}>
                    {getCell({
                        cell,
                        header: cell.type,
                        editMode: false
                    })}
                </td>
            ))}
            <td className={styles.Table__actionCell}>
                <Link to={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${tableName}/rows/${_id}`}
                      className={commonStyles.button}>
                    <span className="fas fa-pen"></span>
                </Link>
                <button onClick={deleteRow.bind(null, _id)} className={commonStyles.button}>
                    <span className="fa fa-trash"></span>
                </button>
            </td>
        </tr>
    )
}
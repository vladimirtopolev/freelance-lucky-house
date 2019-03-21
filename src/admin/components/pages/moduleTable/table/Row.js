import React from 'react';
import { Link } from 'react-router-dom';
import {ADMIN_URL, ADMIN_TABLE_MODULE_URL} from '../../../../constants'
import Image from '../../../common/Image';
import moment from 'moment';

export default ({ cells, tableName, _id, deleteRow }) => {
    return (
        <tr>
            {cells.map(cell => {
                let content;
                switch (cell.type.type) {
                    case 'INPUT': {
                        content = cell.value;
                        break;
                    }
                    case 'IMAGE': {
                        content = <Image src={cell.value} alt='Image'/>;
                        break;
                    }
                    case 'DATE': {
                        console.log(cell.value);
                        content = moment(cell.value).format('DD/MM/YYYY');
                        break;
                    }
                    default: {
                        content = cell.value;
                    }
                }
                return <td>{content}</td>
            })}
            <td className="admin-table__action-cell">
                <Link to={`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${tableName}/rows/${_id}`} className="btn btn-primary">
                    <span className="fa fa-pencil"></span>
                </Link>
                <button onClick={deleteRow.bind(null, _id)}  className="btn btn-danger">
                    <span className="fa fa-trash"></span>
                </button>
            </td>
        </tr>
    )
}
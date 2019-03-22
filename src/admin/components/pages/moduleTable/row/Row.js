import React, { Component } from "react";
import { withRouter } from "react-router";

import styles from './Row.module.scss';
import commonStyles from '../../../common.module.scss';
import { ADMIN_URL, ADMIN_TABLE_MODULE_URL } from '../../../../constants'

import getCell from '../../../common/cells/getCell';
class Row extends Component {

    state = {
        editMode: false
    };

    goBack = () => {
        this.props.history.push(`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${this.props.match.params.tableName}`);
    };

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    };


    render() {
        const { headers, cells, changeCell, saveRow } = this.props;
        const { editMode } = this.state;
        const row = headers.map(header => {
            const cell = cells.find(cell => header._id === cell.type._id);
            return (
                <div>
                    <div>{header.name}</div>
                    <div>
                        {getCell({header, cell, editMode, changeCell: changeCell.bind(null, cell.type)})}
                    </div>
                </div>
            )
        });
        return (
            <div className={commonStyles.page}>
                <div className={commonStyles.page__title}>
                    {editMode ? 'Режим редактирования записи' : 'Режим просмотра записи'}
                </div>
                <div className={commonStyles.page__content}>
                    {row}
                    {editMode
                        ? <button className={commonStyles.button} onClick={saveRow}>Сохранить</button>
                        : <button className={commonStyles.button} onClick={this.toggleEditMode}>Редактировать</button>
                    }
                    <button className={commonStyles.button} onClick={this.goBack}>Назад</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Row);


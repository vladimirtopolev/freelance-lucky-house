import React, { Component } from "react";
import Spinner from '../../../common/Spinner';
import { withRouter } from 'react-router-dom'
import cn from 'classnames';
import styles from './Row.module.scss';
import commonStyles from '../../../common.module.scss';
import { ADMIN_URL, ADMIN_TABLE_MODULE_URL } from '../../../../constants/index'

import getCell from '../../../common/cells/getCell';

class Row extends Component {

    state = {
        editMode: false,
        isLoading: false
    };

    goBack = () => {
        this.props.history.push(`/${ADMIN_URL}/${ADMIN_TABLE_MODULE_URL}/${this.props.match.params.tableName}`);
    };

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    };

    saveRow = () => {
        this.setState({ isLoading: true });
        this.props.saveRow()
            .then(() => {
                this.setState({ isLoading: false });
                this.goBack();
            });
    };


    render() {
        const { headers, cells, changeCell, isNew } = this.props;
        const editMode = this.state.editMode || isNew;
        const row = headers.map((header, i) => {
            const cell = cells.find(cell => header._id === cell.type._id);
            return (
                <div className={styles.Row__tableRow} key={i}>
                    <div className={cn(styles.Row__tableCell, styles.Row__titleTableCell)}>
                        {header.name}
                    </div>
                    <div className={styles.Row__tableCell}>
                        {getCell({ header, cell, editMode, changeCell: changeCell.bind(null, cell.type) })}
                    </div>
                </div>
            )
        });
        return this.state.isLoading
            ? 'Loading'
            : (
                <div className={commonStyles.page}>
                    <div className={commonStyles.page__title}>
                        {editMode ? 'Режим редактирования записи' : 'Режим просмотра записи'}
                    </div>
                    <div className={cn(styles.Row, commonStyles.page__content)}>
                        <div className={styles.Row__table}>
                            {row}
                        </div>
                        {editMode
                            ? <button className={commonStyles.button} onClick={this.saveRow}>Сохранить</button>
                            :
                            <button className={commonStyles.button} onClick={this.toggleEditMode}>Редактировать</button>
                        }
                        <button className={commonStyles.button} onClick={this.goBack}>Назад</button>
                    </div>
                </div>
            );
    }
}

export default withRouter(Row);


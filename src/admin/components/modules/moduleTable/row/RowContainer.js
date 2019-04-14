import _ from 'lodash';
import React, { Component } from 'react';

import Row from './Row';
import Spinner from '../../../common/Spinner';
import { connect } from 'react-redux';
import { fetchTableHeaders, fetchTableRow, saveTableRow, updateTableRow } from '../../../../actions/moduletable';
import { FETCH_ADMIN_TABLE_ROW, FETCH_ADMIN_TABLE_HEADERS } from '../../../../actions/moduletable/type';


import { getTableHeaders, getTableRow } from '../../../../reducers/moduleTable';
import { getIsLoadingStatus } from '../../../../reducers/stateRequest';


class RowContainer extends Component {

    state = { cells: [], isNew: false };


    componentDidMount() {
        const { tableName, rowId } = this.props.match.params;
        this.props.dispatch(fetchTableHeaders(tableName));
        if (rowId !== 'new') {
            this.props.dispatch(fetchTableRow(tableName, rowId));
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props !== state.prevProps) {
            const cells = props.headers.map(header => {
                const cell = _.get(props, 'row.cells', [])
                    .find(c => c.type._id === header._id);
                return cell || { type: header, value: '' }
            });
            return {
                ...state,
                isNew: props.match.params.rowId === 'new',
                cells,
                prevProps: props
            };
        }
    }


    changeCell = (idCell, value) => {
        this.setState((state, props) => {
            const cells = state.cells.map(
                cell => cell.type === idCell ? { ...cell, value } : cell);
            return { cells };
        });
    };

    saveRow = () => {
        const { tableName, rowId } = this.props.match.params;
        if (rowId === 'new') {
            const cells = this.state.cells.map(cell => ({ ...cell, type: cell.type._id }));
            return this.props.dispatch(saveTableRow(tableName, { cells }));
        }
        return this.props.dispatch(updateTableRow(tableName, rowId, { cells: this.state.cells }));
    };

    render() {
        return (
            <Spinner
                isNew={this.state.isNew}
                headers={this.props.headers}
                cells={this.state.cells}
                changeCell={this.changeCell}
                saveRow={this.saveRow}
                {...this.props}>
                <Row/>
            </Spinner>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { tableName, rowId } = ownProps.match.params;
    return {
        headers: getTableHeaders(tableName, state),
        row: getTableRow(tableName, rowId, state),
        isLoading: rowId === 'new'
            ? getIsLoadingStatus(FETCH_ADMIN_TABLE_HEADERS, state)
            : getIsLoadingStatus([FETCH_ADMIN_TABLE_HEADERS, FETCH_ADMIN_TABLE_ROW], state)
    }
}

export default connect(mapStateToProps)(RowContainer);

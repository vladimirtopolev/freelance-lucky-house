import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTableRow, fetchTable } from '../../../../actions/moduletable';
import { FETCH_ADMIN_TABLE } from '../../../../actions/moduletable/type';

import { getTableHeaders, getTableRows, getTableTitle } from '../../../../reducers/moduleTable';
import { getIsLoadingStatus } from '../../../../reducers/stateRequest';

import Spinner from '../../../common/Spinner';

import Table from './Table';

class TableContainer extends Component {
    componentDidMount() {
        const { tableName } = this.props.match.params;
        this.props.dispatch(fetchTable(tableName));
    }

    deleteRow = (idRow) => {
        const { tableName } = this.props.match.params;
        this.props.dispatch(deleteTableRow(tableName, idRow))
    };

    render() {
        return (
            <Spinner
                tableName={this.props.match.params.tableName}
                deleteRow={this.deleteRow}
                {...this.props}>
                <Table/>
            </Spinner>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const tableName = ownProps.match.params.tableName;
    return {
        headers: getTableHeaders(tableName, state),
        rows: getTableRows(tableName, state),
        tableTitle: getTableTitle(tableName, state),
        isLoading: getIsLoadingStatus(FETCH_ADMIN_TABLE, state)
    }
}

export default connect(mapStateToProps)(TableContainer);

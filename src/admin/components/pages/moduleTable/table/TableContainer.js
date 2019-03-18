import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTableHeaders, fetchTableRows, deleteTableRow , fetchTable} from '../../../../actions/moduletable';
import { getTableHeaders, getTableRows, getTableTitle } from '../../../../reducers/moduleTable';

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
        return <Table
            tableName={this.props.match.params.tableName}
            tableTitle={this.props.tableTitle}
            headers={this.props.headers}
            rows={this.props.rows}
            deleteRow={this.deleteRow}/>
    }
}

function mapStateToProps(state, ownProps) {
    const tableName = ownProps.match.params.tableName;
    console.log('State', state);
    return {
        headers: getTableHeaders(tableName, state),
        rows: getTableRows(tableName, state),
        tableTitle: getTableTitle(tableName, state)
    }
}

export default connect(mapStateToProps)(TableContainer)
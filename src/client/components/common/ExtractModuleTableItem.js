import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModuleTableItem } from '../../actions/module/actions'
import { getModuleRow } from '../../reducers/module';

export default (moduleName, getRowIdFromProps) => ModuleComponent => {

    class ExtractModuleTableItem extends Component {

        componentDidMount() {
            const projectId = getRowIdFromProps(this.props);
            this.props.dispatch(fetchModuleTableItem(moduleName, projectId));
        }

        render() {
            return <ModuleComponent {...this.props}/>
        }
    }

    const mapStateToProps = (state, ownProps) => {
        const rowId = getRowIdFromProps(ownProps);
        return {
            row: getModuleRow(moduleName, rowId, state)
        };
    };

    return connect(mapStateToProps)(ExtractModuleTableItem);
}
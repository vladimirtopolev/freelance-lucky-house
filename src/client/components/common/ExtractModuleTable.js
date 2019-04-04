import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModuleTable } from '../../actions/module/actions'
import { getModuleRows } from '../../reducers/module';

export default moduleName => ModuleComponent => {

    class ExtractModuleTable extends Component {
        componentDidMount() {
            this.props.dispatch(fetchModuleTable(moduleName));
        }

        render() {
            return <ModuleComponent {...this.props}/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            rows: getModuleRows(moduleName, state),
        }
    };

    return connect(mapStateToProps)(ExtractModuleTable);
}
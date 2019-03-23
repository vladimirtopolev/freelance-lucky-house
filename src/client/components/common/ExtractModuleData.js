import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModuleData } from '../../actions/module/actions'
import { getModuleRows } from '../../reducers/module';

export default moduleName => ModuleComponent => {

    class ExtractModuleData extends Component {
        componentDidMount() {
            console.log('DID')
            this.props.dispatch(fetchModuleData(moduleName));
        }

        render() {
            console.log('here --->')
            return <ModuleComponent {...this.props}/>
        }
    }

    const mapStateToProps = (state) => ({
        rows: getModuleRows(moduleName, state)
    });

    return connect(mapStateToProps)(ExtractModuleData);
}
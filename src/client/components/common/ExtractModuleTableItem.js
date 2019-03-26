import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModuleTableItem } from '../../actions/module/actions'
import { getModuleRows } from '../../reducers/module';

export default moduleName => ModuleComponent => {

    class ExtractModuleTableItem extends Component {

        static getDerivedStateFromProps(props, state) {
            console.log('HERHER', props)
        }

        componentDidMount() {
            this.props.dispatch(fetchModuleTableItem(moduleName));
        }

        render() {
            return <ModuleComponent {...this.props}/>
        }
    }

    const mapStateToProps = (state) => ({
        rows: getModuleRows(moduleName, state)
    });

    return connect(mapStateToProps)(ExtractModuleTableItem);
}
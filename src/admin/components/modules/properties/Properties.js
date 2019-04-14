import React, {Component} from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

import tableStyles from '../../table.common.module.scss';
import tableWrapperStyles from '../../table-wrapper.commom.module.scss';
import styles from './Properties.module.scss';

import {getProperties} from '../../../reducers/properties'
import {fetchProperties, changePropertyValue} from '../../../actions/properties/index';
import getCell from '../../common/cells/getCell'

class Properties extends Component {

    state = {
        editMode: false
    };

    toggleEditState = (newState) => {
        this.setState((state) => ({editMode: newState === undefined ? !state.editMode : newState}));
    };

    changeCellValue = (internalName, value) => {
        this.props.dispatch(changePropertyValue(internalName, value));
    };

    componentDidMount() {
        this.props.dispatch(fetchProperties());
    }

    render() {
        const {properties} = this.props;
        return (
            <div className={cn(tableWrapperStyles.tableWrapper, styles.Properties)}>
                <div className={cn(tableWrapperStyles.tableWrapper__title)}>
                    Общие свойства
                </div>
                <div className={cn(tableWrapperStyles.tableWrapper__content)}>
                    <div className={tableWrapperStyles.tableWrapper__tableBar}>
                        <ul className={styles.Properties__switcher}>
                            <li className={cn({[styles.Properties__switcher_selected]: !this.state.editMode})}>
                                <button onClick={this.toggleEditState.bind(null, false)}>
                                    <i className="fas fa-eye"></i>
                                </button>
                            </li>
                            <li className={cn({[styles.Properties__switcher_selected]: this.state.editMode})}>

                                <button onClick={this.toggleEditState.bind(null, true)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={tableWrapperStyles.tableWrapper__table}>
                        <table className={cn(tableStyles.table, tableStyles.table_striped)}>
                            <tbody>
                            {properties.map((property, i) => {
                                const propertyCell = {
                                    cell: {
                                        value: property.value
                                    },
                                    header: {
                                        type: property.type,
                                        name: property.name
                                    },
                                    editMode: this.state.editMode,
                                    changeCell: this.changeCellValue.bind(null, property.internalName)
                                };

                                return (
                                    <tr key={i}>
                                        <td style={{width: 300}}>{property.name}</td>
                                        <td>{getCell(propertyCell)}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        properties: getProperties(state)
    }
}

export default connect(mapStateToProps)(Properties)

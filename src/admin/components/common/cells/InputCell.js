import React from "react";
import PropTypes from 'prop-types';
import styles from '../../common.module.scss';

export default function InputCell({ cell, header, editMode, changeCell }) {
    const onChange = (ev) => {
        changeCell(ev.target.value);
    };

    return editMode ?
        <input className={styles.input}
               value={cell.value}
               onChange={onChange}/>
        : cell.value
}

InputCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};

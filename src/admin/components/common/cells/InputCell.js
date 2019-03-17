import React from "react";
import PropTypes from 'prop-types';

export default function InputCell({ cell, header, editMode, changeCell }) {
    const onChange = (ev) => {
        changeCell(ev.target.value);
    };

    return editMode ? <input value={cell.value} onChange={onChange}/> : cell.value
}

InputCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any
    }),
    header: PropTypes.shape({
        name: PropTypes.string
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func.isRequired
};

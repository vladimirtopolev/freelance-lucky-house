import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";

export default function DateCell({ cell, header, editMode, changeCell }) {
    const onChange = (ev) => {
        changeCell(ev.target.value);
    };

    return editMode
        ? <input value={moment(cell.value).format('YYYY-MM-DD')} onChange={onChange} type="date"/>
        : moment(cell.value).format('DD/MM/YYYY');
}

DateCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func
};

import React from 'react';
import PropTypes from 'prop-types';

import Editor from '../Editor';

export default function TextareaCell({ cell, header, editMode, changeCell }) {
    const onChange = (newValue) => {
        changeCell(newValue);
    };

    return editMode
                ? (
                    <div>
                        <Editor value={cell.value} onChange={onChange}/>
                    </div>
                )
                : (
                    <div dangerouslySetInnerHTML={{ __html: cell.value }}></div>
                )
};

TextareaCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.string
    }),
    header: PropTypes.shape({
        name: PropTypes.string
    }),
    editMode: PropTypes.bool.isRequired,
    changeCell: PropTypes.func.isRequired
};
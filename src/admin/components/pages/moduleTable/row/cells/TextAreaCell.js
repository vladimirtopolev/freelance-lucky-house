import React from 'react';
import Editor from '../../../../common/Editor'

export default ({ cell, header, editMode, changeCell }) => {
    const onChange = (newValue) => {
        console.log(newValue);
        changeCell(newValue);
    };

    return (
        <div>
            <div>{header.name}</div>
            {editMode
                ? (
                    <div>
                        <Editor value={cell.value} onChange={onChange}/>
                    </div>
                )
                : (
                    <div dangerouslySetInnerHTML={{ __html: cell.value }}></div>
                )
            }
        </div>
    )
}
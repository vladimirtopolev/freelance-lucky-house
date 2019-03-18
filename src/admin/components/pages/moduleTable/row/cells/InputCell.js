import React from "react";

export default ({ cell, header, editMode, changeCell }) => {
    const onChange = (ev) => {
        changeCell(ev.target.value);
    };

    return (
        <div>
            <div>{header.name}</div>
            <div>
                {editMode ? <input value={cell.value} onChange={onChange}/> : cell.value}
            </div>
        </div>
    )
}
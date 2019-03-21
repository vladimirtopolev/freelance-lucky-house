import React from "react";
import moment from "moment";

export default ({ cell, header, editMode, changeCell }) => {
    const onChange = (ev) => {
        console.log(ev.target.value, moment(ev.target.value).format())
        changeCell(ev.target.value);
    };

    return (
        <div>
            <div>{header.name}</div>
            <div>
                {editMode
                    ? <input value={moment(cell.value).format('YYYY-MM-DD')} onChange={onChange} type="date"/>
                    : moment(cell.value).format('DD MM YYYY')}
            </div>
        </div>
    )
}
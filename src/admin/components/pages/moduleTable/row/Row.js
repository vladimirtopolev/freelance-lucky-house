import React, { Component } from "react";
import RowCell from "./RowCell";
import { withRouter } from "react-router";

class Row extends Component {

    state = {
        editMode: false
    };

    goBack = () => {
        this.props.history.goBack();
    };

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    };


    render() {
        const { headers, cells, changeCell, saveRow } = this.props;
        const row = headers.map(header => {
            const cell = cells.find(cell => header._id === cell.type._id);
            return <RowCell header={header}
                            cell={cell}
                            editMode={this.state.editMode}
                            changeCell={changeCell.bind(null, cell.type)}/>
        });
        return (
            <div>
                {row}
                <button onClick={this.toggleEditMode}>Редактировать</button>
                <button onClick={this.goBack}>Назад</button>
                <button onClick={saveRow}>Сохранить</button>
            </div>
        );
    }
}

export default withRouter(Row);


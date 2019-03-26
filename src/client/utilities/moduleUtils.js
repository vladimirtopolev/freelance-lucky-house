import _ from 'lodash';


export function findRowCell(internalCellName, row) {
    return _.find(row.cells, cell => cell.type.internalName === internalCellName);
}

export function findRowCellValue(internalCellName, row) {
    return _.get(findRowCell(internalCellName, row), 'value')
}

export function findRowByCellValue(rows, internalCellName, value) {
    return rows.find(row => {
        const urlCell = findRowCell(internalCellName, row);
        console.log('urlCell', urlCell);
        return urlCell && urlCell.value === value;
    });
}
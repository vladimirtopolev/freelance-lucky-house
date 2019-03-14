import Table from '../../models/table/table';
import TableColumn from '../../models/table/tableColum';
import TableRow from '../../models/table/tableRow';
import TableCell from '../../models/table/tableCell';
import async from 'async';
import { saveItem, saveItems, dropTables } from '../../utilities/db';


export default (tableInfo, endCallback) => {
    console.log(tableInfo);
    const table = tableInfo.TABLE;
    const columns = tableInfo.TABLE_COLUMNS;
    const rows = tableInfo.TABLE_ROWS;

    const cells = rows.reduce((cells, row) => {
        return cells.concat(row.cells)
    }, []);

    async.series([
        cb => saveItems(TableColumn, columns, cb),
        cb => saveItems(TableCell, cells, cb),
        cb => saveItems(TableRow, rows, cb),
        (cb) => {
            const tableItem = {
                _id: table.id,
                name: table.name,
                title: table.title,
                headers: columns.map(col => col._id),
                rows: rows.map(raw => raw._id),
                uiConfig: table.uiConfig,
                adminConfig: table.adminConfig
            };
            saveItem(Table, tableItem, cb)
        }
    ], (err, res) => {
        endCallback(err);
    });
}
const Table = require('../../models/moduleTable/table');
const TableColumn = require('../../models/moduleTable/tableColum');
const TableRow = require('../../models/moduleTable/tableRow');
const TableCell = require('../../models/moduleTable/tableCell');
const async = require('async');
const { saveItem, saveItems } = require('../../utilities/db');


module.exports = (tableInfo, endCallback) => {
    return new Promise((resolve, reject) => {
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
            if (endCallback) {
                endCallback(err);
                resolve();
            } else {
                if (err) {
                    reject(err);
                } else {
                    console.log('Script applied succesfully');
                    resolve(res);
                }
            }

        });
    });
}
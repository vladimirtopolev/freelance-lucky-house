const Table = require('../../models/moduleTable/table');
const TableColumn = require('../../models/moduleTable/tableColum');
const TableRow = require('../../models/moduleTable/tableRow');
const TableCell = require('../../models/moduleTable/tableCell');

module.exports = (tableName) => {
    return new Promise((resolve, reject) => {
        Table.deleteOne({name: tableName})
            .exec((err) => {
                if (err) {
                    return reject(err)
                }
                resolve();
            })
    })
};

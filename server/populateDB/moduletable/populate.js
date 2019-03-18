import mongoose from 'mongoose';
const { Types: { ObjectId } } = mongoose;

import Table from '../../models/moduleTable/table';
import TableColumn from '../../models/moduleTable/tableColum';
import TableRow from '../../models/moduleTable/tableRow';
import TableCell from '../../models/moduleTable/tableCell';
import async from 'async';
import { saveItem, saveItems, dropTables } from '../../utilities/db';

import {
    TABLE_ID,
    TABLE_NAME,
    TABLE_TITLE,
    TABLE_COLUMNS,
    TABLE_CELLS_FIRST_RAW,
    TABLE_CELLS_SECOND_RAW,
    TABLE_ROWS
} from './constants';

import populateTable from './populateTable';

import * as bestWorkTable from './bestwork/table';
import * as partnersTable from './partners/table';
import * as staticPagesTable from './staticpages/table';

export default (endCallback) => {
    async.series([
        // test table
        cb => dropTables([Table, TableRow, TableCell, TableColumn], cb),
        cb => saveItems(TableColumn, TABLE_COLUMNS, cb),
        cb => saveItems(TableCell, TABLE_CELLS_FIRST_RAW, cb),
        cb => saveItems(TableCell, TABLE_CELLS_SECOND_RAW, cb),
        cb => saveItems(TableRow, TABLE_ROWS, cb),
        (cb) => {
            const table = {
                _id: TABLE_ID,
                name: TABLE_NAME,
                title: TABLE_TITLE,
                headers: TABLE_COLUMNS.map(col => col._id),
                rows: TABLE_ROWS.map(raw => raw._id)
            };
            saveItem(Table, table, cb)
        },

        // other custom tables
        cb => populateTable(bestWorkTable, cb),
        cb => populateTable(partnersTable, cb),
        cb => populateTable(staticPagesTable, cb)
    ], (err, res) => {
        endCallback(err);
    });
}
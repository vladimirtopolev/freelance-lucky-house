import Table from '../../models/moduleTable/table';
import TableRow from '../../models/moduleTable/tableRow';
import TableCell from '../../models/moduleTable/tableCell';
import async from 'async';
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId;

function findTableByName(tableName) {
    return Table.findOne({ name: tableName })
}

function getHeaders(req, res) {
    const { tableName } = req.params;
    Table.findOne({ name: tableName })
        .populate('headers')
        .exec((err, item) => {
            if (!item) {
                return res.status(404).json({ error: `Table ${tableName} does not exist` })
            }
            return res.json(item.headers);
        });
}

function getRows(req, res) {
    const { tableName } = req.params;
    Table.findOne({ name: tableName })
        .populate({
            path: 'rows',
            model: 'TableRow',
            populate: {
                path: 'cells',
                model: 'TableCell',
                populate: {
                    path: 'type',
                    model: 'TableColumn'
                }
            }
        })
        .exec((err, item) => {
            if (!item) {
                return res.status(404).json({ error: `Table ${tableName} does not exist` })
            }
            return res.json(item.rows);
        });
}

function getRow(req, res) {
    const { tableName, rowId } = req.params;

    Table.findOne({ name: tableName, rows: { $elemMatch: { $eq: rowId } } }, { 'rows.$': 1 })
        .populate({
            path: 'rows',
            model: 'TableRow',
            populate: {
                path: 'cells',
                model: 'TableCell',
                populate: {
                    path: 'type',
                    model: 'TableColumn'
                }
            }
        })
        .exec((err, item) => {
            if (err || !item) {
                return res.status(404).json({ error: `Wrong table name "${tableName}" or row id "${rowId}"` })
            }
            res.json(item.rows[0]);
        })
}

function getTable(req, res) {
    const { tableName } = req.params;
    Table.findOne({ name: tableName })
        .populate({
            path: 'rows',
            model: 'TableRow',
            populate: {
                path: 'cells',
                model: 'TableCell',
                populate: {
                    path: 'type',
                    model: 'TableColumn'
                }
            }
        })
        .populate('headers')
        .exec((err, item) => {
            if (!item) {
                return res.status(404).json({ error: `Table ${tableName} does not exist` })
            }
            return res.json(item);
        });
}


async function createRow(req, res) {
    const { _doc: table } = await findTableByName(req.params.tableName);
    const cells = req.body.cells.map(cell => {
        return {
            ...cell,
            type: ObjectId(cell.type),
            table: table._id
        }
    });
    const savedCells = await TableCell.create(cells);

    const tableRow = new TableRow({
        cells: savedCells,
        table: table._id
    });
    const savedTableRow = await tableRow.save();

    await Table.update({ _id: table._id }, { rows: table.rows.concat(savedTableRow._doc._id) });
    res.json(savedTableRow._doc);
}

async function updateRow(req, res) {
    try {
        const { rowId } = req.params;

        const bulkOpts = req.body.cells.reduce((memo, cell) => {
            return memo.concat({
                updateOne: {
                    filter: { '_id': cell._id },
                    update: { '$set': { value: cell.value } }
                }
            })
        }, []);

        await TableCell.bulkWrite(bulkOpts);

        const tableRow = await TableRow.findById(rowId)
            .populate('cells');
        res.json(tableRow._doc);
    } catch (err) {
        res.status(404).json({ error: err });
    }
}

async function deleteRow(req, res) {
    const { rowId, tableName } = req.params;
    const { _doc: table } = await findTableByName(tableName);

    await Table.update({ _id: table._id }, { rows: table.rows.filter(row => row._id.toString() !== rowId) });
    res.json({test: 'test'});
}


export default (app) => {
    app.route('/api/moduletable/:tableName/headers')
        .get(getHeaders);


    app.route('/api/moduletable/:tableName/rows/:rowId')
        .get(getRow)
        .put(updateRow)
        .delete(deleteRow);

    app.route('/api/moduletable/:tableName/rows')
        .get(getRows)
        .post(createRow);

    app.route('/api/moduletable/:tableName')
        .get(getTable);
}
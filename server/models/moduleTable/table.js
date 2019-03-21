const mongoose = require('mongoose');
const { Schema } = mongoose;

const TableColumn = require('./tableColum');
const TableRow = require('./tableRow');

const tableSchema = Schema({
    name: String,
    title: String,
    headers: [{
        type: Schema.Types.ObjectId, ref: TableColumn.modelName
    }],
    rows: [{
        type: Schema.Types.ObjectId, ref: TableRow.modelName
    }],
    uiConfig: mongoose.Mixed,
    adminConfig: mongoose.Mixed
});


module.exports = mongoose.model('Table', tableSchema);

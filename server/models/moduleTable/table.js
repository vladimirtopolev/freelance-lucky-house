const mongoose = require('mongoose');
const { Schema } = mongoose;

const tableSchema = Schema({
    name: String,
    title: String,
    headers: [{
        type: Schema.Types.ObjectId, ref: 'TableColumn'
    }],
    rows: [{
        type: Schema.Types.ObjectId, ref: 'TableRow'
    }],
    uiConfig: mongoose.Mixed,
    adminConfig: mongoose.Mixed
});


module.exports = mongoose.model('Table', tableSchema);

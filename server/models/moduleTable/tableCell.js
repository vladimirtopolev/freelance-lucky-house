const mongoose = require('mongoose');
const { Schema } = mongoose;

const tableCellSchema = Schema({
    type: {
        type: Schema.Types.ObjectId, ref: 'TableColumn'
    },
    value: Schema.Types.Mixed,
    table: {
        type: Schema.Types.ObjectId, ref: 'Table'
    },
});


module.exports = mongoose.model('TableCell', tableCellSchema);

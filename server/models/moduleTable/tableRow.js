const mongoose = require('mongoose');
const { Schema } = mongoose;

const tableRowSchema = Schema({
    cells: [{
        type: Schema.Types.ObjectId, ref: 'TableCell'
    }],
    table: {
        type: Schema.Types.ObjectId, ref: 'Table'
    }
});


module.exports = mongoose.model('TableRow', tableRowSchema);

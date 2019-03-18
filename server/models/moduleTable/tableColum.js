const mongoose = require('mongoose');

const tableColumnSchema = mongoose.Schema({
    type: String,
    name: String,
    internalName: String,
    order: Number,
});

module.exports = mongoose.model('TableColumn', tableColumnSchema);
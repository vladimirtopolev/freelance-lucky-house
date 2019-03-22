const mongoose = require('mongoose');

const tableColumnSchema = mongoose.Schema({
    type: String,
    name: String,
    internalName: String,
    properties: Object,
    order: Number,
});

module.exports = mongoose.model('TableColumn', tableColumnSchema);
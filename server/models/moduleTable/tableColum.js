const mongoose = require('mongoose');

const tableColumnSchema = mongoose.Schema({
    type: String,
    name: String,
    internalName: String,
    previewHidden: Boolean,
    properties: Object,
    order: Number,
});

module.exports = mongoose.model('TableColumn', tableColumnSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const property = Schema({
    type: String,
    name: String,
    internalName: String,
    order: Number,
    value: Schema.Types.Mixed,
});


module.exports = mongoose.model('Property', property);

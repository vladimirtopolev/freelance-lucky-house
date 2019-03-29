const mongoose = require('mongoose');
const { Schema } = mongoose;


const ordedCallSchema = Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    clientDescriptions: String,
    ownDescriptions: String,
    statusDates: Object,
    status: String,
    isDeleted: Boolean,
});


module.exports = mongoose.model('OrderedCall', ordedCallSchema);

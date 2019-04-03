const mongoose = require('mongoose');
const { Schema } = mongoose;


const subscriptionSchema = Schema({
    email: String,
    isDeleted: Boolean,
});


module.exports = mongoose.model('Subscription', subscriptionSchema);

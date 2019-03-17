import mongoose from 'mongoose';
const { Schema } = mongoose;

const property = Schema({
    type: String,
    name: String,
    internalName: String,
    order: Number,
    value: Schema.Types.Mixed,
});


export default mongoose.model('Property', property);

import mongoose from 'mongoose';

const tableColumnSchema = mongoose.Schema({
    type: String,
    name: String,
    internalName: String,
    order: Number,
});

export default mongoose.model('TableColumn', tableColumnSchema);
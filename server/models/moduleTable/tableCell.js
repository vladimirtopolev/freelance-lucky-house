import mongoose from 'mongoose';
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


export default mongoose.model('TableCell', tableCellSchema);

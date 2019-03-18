import mongoose from 'mongoose';
const { Schema } = mongoose;

const tableRowSchema = Schema({
    cells: [{
        type: Schema.Types.ObjectId, ref: 'TableCell'
    }],
    table: {
        type: Schema.Types.ObjectId, ref: 'Table'
    }
});


export default mongoose.model('TableRow', tableRowSchema);

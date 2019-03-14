import mongoose from 'mongoose';

const { Schema } = mongoose;

const NavigationSchema = new Schema({
    level: Number,
    leftKey: Number,
    rightKey: Number,
    name: String,
    url: String
});

export default mongoose.model('Navigation', NavigationSchema);
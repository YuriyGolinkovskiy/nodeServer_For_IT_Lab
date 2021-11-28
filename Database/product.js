import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    about: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
});

export default mongoose.model('Product', Product);

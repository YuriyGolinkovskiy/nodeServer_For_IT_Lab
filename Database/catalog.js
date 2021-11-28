import mongoose from 'mongoose';

const Catalog = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    products: { type: Array },
});

export default mongoose.model('Catalog', Catalog);

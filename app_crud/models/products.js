const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    id: Number,
    name: String,
    qty: Number, 
    image: String,
    price: Number,
    description: String,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Blog", BlogSchema);
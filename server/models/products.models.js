const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Please include a tile"
        ],
    },

    price: {
        type: String,
        required: [
        true,
        "Please include a price"
    ],
    },

    description: {
        type: String,
        required: [
        true,
        "Please include a description !"
    ],
    },

},{ timestamps: true })

const Product = mongoose.model("Product", ProductSchema);

module.exports ={ Product }

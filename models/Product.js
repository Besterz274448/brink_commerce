const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        product_name:{
            type: String,
        },
        product_desc:{
            type: String,
        },
        product_price:{
            type: Number,
        },
        product_stock:{
            type: Number,
        },
        product_image:{
            type: String,
        },
        product_createOn:{
            type: String,
        },
        product_modifiedOn:{
            type: String,
        },
    },
    {
        collection: "Product"
    }
)


module.exports = Products = mongoose.model('Product',ProductSchema);
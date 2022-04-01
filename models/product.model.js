const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    images: { img1: { type: String }, img2: { type: String }, img3: { type: String } },
    name: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    main_price: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    For: { type: String, required: true },
    With: { type: String, required: true },
    quant: { type: Number, required: true },
    With: { type: String, required: true }
})
module.exports = mongoose.model("product", ProductSchema);
const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
// get all products 
router.get("", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        res.status(401).send(product);
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})
// get products by categories
router.get("/cateorgies/:cate", async (req, res) => {
    try {
        const product = await Product.find({ category: req.params.cate }).lean().exec();
        res.status(401).send(product);
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})
//  get product by id 
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        res.status(401).send(product);
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})



module.exports = router
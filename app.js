const express = require("express");
const app = express();
const path = require("path")
const { body } = require('express-validator');
app.use(express.json());
const Productcontroller = require("./controllers/product.controller");
const { register, login } = require("./controllers/auth");
const static_path = path.join(__dirname, "./public");


app.use(express.static(static_path));

//  index route

app.get("", (req, res) => {
    try {
        res.send("homepage");
    } catch (error) {
        res.send(error);
    }
});

// api for products 
app.use("/product", Productcontroller)

//  login & registration 

app.post("/register", body("firstName").trim().not().isEmpty().bail(), body("lastName").trim().not().isEmpty().bail(), body("Number").trim().isNumeric(), body("Email").isEmail().bail(), register);
app.post("/login", body("Number").trim().isNumeric().withMessage("Enter a valid Number").isMobilePhone().withMessage("must be a number"), login)



module.exports = app;

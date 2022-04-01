const jwt = require('jsonwebtoken');
require("dotenv").config();
const { validationResult } = require('express-validator');
const User = require("../models/user.model");



const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({ Number: req.body.Number });
        if (user) {
            return res.send({ message: "User is already exist " })
        }
        // const filepaths = req.files.map((file) => {
        //     return file.path;
        // })
        user = await User.create(req.body);
        const token = jwt.sign({ user }, process.env.JWT_SECRETKEY)
        // console.log(token)
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(req.body.Number);
        let user = await User.findOne({ Number: req.body.Number })
        if (!user) return res.send({null:null})

        //if email exists, check password;



        const token = jwt.sign({ user }, process.env.JWT_SECRETKEY)
        res.send({ user, token })
    } catch (error) {
        res.status(500).send({ "Error-message": error.message })
    }
}

module.exports = { register, login }
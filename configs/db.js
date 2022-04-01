const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://ankush:ankush_123@cluster0.2tu5s.mongodb.net/bebodywisedb?retryWrites=true&w=majority")
}
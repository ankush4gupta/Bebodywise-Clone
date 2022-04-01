const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Number: { type: Number, required: true,unique:true },
    Email: { type: String, required: true, unique: true },

})
module.exports = mongoose.model("user", UserSchema);
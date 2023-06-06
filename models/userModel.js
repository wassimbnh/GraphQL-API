const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name: String,
    age: Number
});

module.exports = model("User",userSchema);
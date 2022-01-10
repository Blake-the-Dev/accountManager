const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    fname:
    {
        type: String,
        required: true
    },
    lName:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("userDetails", userSchema);
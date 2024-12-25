// database schema for user login and regsiteraiton
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true
        
        
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema);
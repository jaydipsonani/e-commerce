var mongoose = require('mongoose')

var registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    }
})

module.exports = mongoose.model('register', registerSchema)

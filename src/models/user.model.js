const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    about: String,
    profile: String,
    create_at: String,
    update_at: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.export = mongoose.model('Users', userSchema, 'Users');
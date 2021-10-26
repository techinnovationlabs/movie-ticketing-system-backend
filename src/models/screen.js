const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    tier: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        code: {
            type: String,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        rows: [{
            type: String
        }]
    }]
});


const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
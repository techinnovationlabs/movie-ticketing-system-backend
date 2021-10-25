const mongoose = require('mongoose');
const validator = require('validator');

const showSlotSchema = new mongoose.Schema({
    slot: {
        type: String,
        required: true,
        trim: true
    }
});

const ShowSlot = mongoose.model('Showslot', showSlotSchema);

module.exports = ShowSlot;
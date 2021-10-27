const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    show: {
        type: Schema.Types.ObjectId,
        ref: 'Show'
    },
    ticketNos: [{
        type: String,
    }],
    totalPrice: {
        type: Number,
    },
    ticketDetails: {
        adults: Number,
        kids: Number
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
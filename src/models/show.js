const mongoose = require('mongoose');


// const availableTickets = new Schema({
//     code: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     availableSeats: [{
//         type: String
//     }]
// });

const showSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    showTime: {
        type: Schema.Types.ObjectId,
        ref: "Showslot"
    },
    movie: { type: Schema.Types.ObjectId, ref: "Movie" },
    screen: { type: Schema.Types.ObjectId, ref: "Screen" },
    availability: [{
        code: {
            type: String,
            required: true,
            trim: true
        },
        availableSeats: [{
            type: String
        }]
    }],
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
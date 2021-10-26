const mongoose = require('mongoose');
const { Schema } = mongoose;
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
        tierCode: {
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
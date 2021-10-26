const Show = require("../models/show");
const Screen = require("../models/screen");

const fetchShows = async (req, res) => {
    try {
        const shows = await Show.find();
        res.send(shows);
    } catch (e) {
        res.status(500)
            .send("An error occurred while fetching the shows: " + e.message);
    }
};

const createShow = async (req, res) => {
    const { screenId, slotId, date, movieId } = req.body;
    try {
        const screen = await Screen.findById(screenId);
        if (!screen) {
            throw new Error("Screen Not found");
        }
        const availability = screen.tier.map(tier => {
            let availableSeats = [];
            const tierCode = tier.code;
            tier.rows.map(row => {
                availableSeats = availableSeats.concat(getSeats(row));
            });
            return { availableSeats, tierCode };
        });
        const show = new Show({ date: date, availability, movie: movieId, showTime: slotId, screen });
        await show.save();
        return res.status(201).send({ show });
    } catch (e) {
        res.status(500).send("An error occurred while creating a show: " + e.message);
    }
};

const getSeats = (row, seatsPerRow = 10) => {
    const seats = [];
    for (let i = 1; i <= seatsPerRow; i++) {
        seats.push(`${row}${i}`);
    }
    return seats;
};

module.exports = {
    fetchShows,
    createShow,
};
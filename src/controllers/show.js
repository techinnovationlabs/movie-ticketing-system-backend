const Show = require("../models/show");
const Screen = require("../models/screen");

const fetchShows = async (req, res) => {
    try {
        let shows;
        if (req.query.movieId && req.query.date) {
            shows = await Show.find({
                movie: req.query.movieId, date: {
                    $gte: new Date(new Date(req.query.date).setHours(00, 00, 00)),
                    $lt: new Date(new Date(req.query.date).setHours(23, 59, 59))
                }
            }).populate("movie").populate("screen").populate("showTime");
        } else {
            shows = await Show.find().populate("movie").populate("screen").populate("showTime");
        }
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
            const name = tier.name;
            const price = tier.price;
            tier.rows.map(row => {
                availableSeats = availableSeats.concat(getSeats(row));
            });
            return { availableSeats, tierCode, name, price };
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
    for (let i = 1; i <= seatsPerRow; i = i + 2) {
        seats.push(`${row}${i}`);
    }
    return seats;
};

module.exports = {
    fetchShows,
    createShow,
    fetchShowByMovieAndDate
};
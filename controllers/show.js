const {
  setseatingArrangements,
  getAvailableSeats,
} = require("../helpers/services");
const Show = require("../models/show");
const ShowTimimgs = require("../models/showtiming");

const fetchShows = async (req, res) => {
  try {
    const shows = await Show.find()
      .populate("movie")
      .populate("screen")
      .populate("time");
    if (shows.length) {
      return res.status(200).send(shows);
    } else {
      return res.status(404).send("Show List empty");
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while fetching shows", err.message);
  }
};

const fetchShowTimings = async (req, res) => {
  try {
    const showTime = await ShowTimimgs.find();
    if (showTime.length) {
      return res.status(200).send(showTime);
    } else {
      return res.status(406).send("Empty Show Timings");
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while fetching show timigs", err.message);
  }
};
const createShow = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    data.seats = await setseatingArrangements(data.screen);
    data.availableSeats = await getAvailableSeats(data.seats);

    let show = await new Show(data);
    show = await show.save();
    show = await Show.findById(show._id)
      .populate("movie")
      .populate("time")
      .populate("screen");
    if (show) {
      return res.status(200).send(show);
    }
    return res.status(500).send("Unknown error!!");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while creating show", err.message);
  }
};

module.exports = {
  createShow,
  fetchShowTimings,
  fetchShows,
};

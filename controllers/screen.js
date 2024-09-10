const { SMALL_HALL, LARGE_HALL } = require("../helpers/constant");
const Screen = require("../models/screen");

const fetchScreens = async (req, res) => {
  try {
    const screens = await Screen.find();
    if (screens.length) {
      return res.status(200).send(screens);
    } else {
      return res.status(404).send("Screen List empty");
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while fetching screens", err.message);
  }
};

const createScreen = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      category: [
        {
          name: "NORMAL",
          adultPrice: req.body.adultNormal,
          childPrice: req.body.childNormal,
        },
        {
          name: "PREMIUM",
          adultPrice: req.body.adultPremium,
          childPrice: req.body.childPremium,
        },
      ],
      size: req.body.size,
    };
    if (data.size === "small") {
      data.seats = SMALL_HALL;
    } else if (data.size === "large") {
      data.seats = LARGE_HALL;
    }
    let screen = await new Screen(data);
    screen = await screen.save();
    if (screen) {
      return res.status(200).send(screen);
    }
    return res.status(500).send("Unknown Error!!");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while creating screen", err.message);
  }
};

const editScreen = async (req, res) => {
  try {
    const data = {
      _id: req.body.key,
      name: req.body.name,
      category: [
        {
          name: "NORMAL",
          adultPrice: req.body.adultNormal,
          childPrice: req.body.childNormal,
        },
        {
          name: "PREMIUM",
          adultPrice: req.body.adultPremium,
          childPrice: req.body.childPremium,
        },
      ],
      size: req.body.size,
    };
    if (data.size === "small") {
      data.seats = SMALL_HALL;
    } else if (data.size === "large") {
      data.seats = LARGE_HALL;
    }
    const screen = await Screen.findByIdAndUpdate(data._id, data);
    if (screen) {
      return res.status(200).send(screen);
    }
    return res.status(500).send("Unknown Error!!");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while creating screen", err.message);
  }
};

module.exports = {
  createScreen,
  fetchScreens,
  editScreen,
};

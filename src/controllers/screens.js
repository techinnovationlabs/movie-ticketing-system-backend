const Screen = require("../models/screen");

const fetchScreens = async (req, res) => {
    try {
        const screens = await Screen.find();
        res.send(screens);
    } catch (e) {
        res.status(500)
            .send("An error occurred while fetching the screens: " + e.message);
    }
};

const createScreen = async (req, res) => {
    try {
        const screen = new Screen(req.body);
        await screen.save();
        return res.status(201).send({ screen });
    } catch (e) {
        res.status(500).send("An error occurred while creating a  Screen: " + e.message);
    }
};


module.exports = {
    fetchScreens,
    createScreen,
};
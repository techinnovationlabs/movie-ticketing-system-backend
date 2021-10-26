const ShowSlot = require("../models/showslot");

const fetchShowSlots = async (req, res) => {
    try {
        const slots = await ShowSlot.find();
        res.send(slots);
    } catch (e) {
        res.status(500)
            .send("An error occurred while fetching the slots: " + e.message);
    }
};


module.exports = {
    fetchShowSlots,
};
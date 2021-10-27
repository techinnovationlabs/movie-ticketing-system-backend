const Booking = require("../models/booking");
const Show = require("../models/show");
const bookShow = async (req, res) => {
    try {
        const { allotedTickets, totalPrice, ticketDetails, showId, tierId } = req.body;
        const show = await Show.findById(showId);

        if (!show) {
            throw new Error();
        }
        const updatedAvailability = show.availability.map(tier => {
            if (tier._id == tierId) {
                const updatedSeats = tier.availableSeats.filter(seatNo => !allotedTickets.includes(seatNo));
                tier.availableSeats = updatedSeats;
            }
            return tier;
        });
        show.availability = updatedAvailability;
        const booking = new Booking({ bookedBy: req.user._id, show: showId, ticketNos: allotedTickets, totalPrice, ticketDetails });
        await booking.save();
        await show.save();
        return res.status(201).send({ booking });
    } catch (e) {
        res.status(500).send("An error occurred while booking the ticket: " + e.message);
    }
};

module.exports = {
    bookShow,
};
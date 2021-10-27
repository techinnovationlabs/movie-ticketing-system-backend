const Screen = require("../models/screen");
const setseatingArrangements = async (id) => {
  const screen = await Screen.findById(id);
  const seatings = [];
  let disabledSeat = true;
  for (let row in screen.seats) {
    for (let line of screen.seats[row]) {
      seatings.push({
        seatNo: line,
        disabled: disabledSeat,
        picked: false,
      });
      disabledSeat = !disabledSeat;
    }
  }
  return seatings;
};

const getAvailableSeats = async (seats) => {
  const available = seats.filter((seat) => !seat.disabled && !seat.picked);
  return available.length;
};

module.exports = {
  setseatingArrangements,
  getAvailableSeats,
};

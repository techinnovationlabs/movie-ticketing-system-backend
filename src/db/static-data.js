const Movie = require("../models/movie");
const ShowSlot = require("../models/showslot");

const movies = [
    {
        title: "Avengers: Endgame",
        trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        plot:
            "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        title: "Free Guy",
        trailerLink: "https://www.youtube.com/watch?v=X2m-08cOAbc",
        plot:
            "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
        title: "Iron Man",
        trailerLink: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
        plot:
            "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
    },
    {
        title: "Stand by Me Doraemon 2",
        trailerLink: "https://www.youtube.com/watch?v=D0nK00pnACc",
        plot:
            "One day Nobita Nobi found a old stuffed bear which his grandmother gave it to him. Nobita decided to go back in time to meet his grandmother. Grandma accepts Nobita's belief that he is a young child who has suddenly arrived. Nobita'",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMzQ2MzJmZGMtZjhmNS00MGUyLWJjOGMtYzVmMTg4OTA2YzZkXkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_SX300.jpg"
    },
    {
        title: "Hachi: A Dog's Tale",
        trailerLink: "https://www.youtube.com/watch?v=Y6U7mAnPtw4",
        plot:
            "A college professor bonds with an abandoned dog he takes into his home.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }
];

const showSlots = [{
    slot: "5 AM"
}, {
    slot: "7 AM"
}, {
    slot: "10 AM"
}, {
    slot: "1 PM"
}, {
    slot: "4 PM"
}, {
    slot: "7 PM"
}, {
    slot: "10 PM"
}
];

const putStaticData = async () => {
    try {
        const moviesCount = await Movie.count();
        if (moviesCount === 0) {
            const uploadMovies = await Movie.insertMany(movies);
            if (uploadMovies.length) {
                console.log("Movie Static Data uploaded successfully!");
            }
        }
        const showSlotCount = await ShowSlot.count();
        if (showSlotCount === 0) {
            const uploadSlots = await ShowSlot.insertMany(showSlots);
            if (uploadSlots.length) {
                console.log("Show Timing Static Data uploaded successfully!");
            }
        }
    } catch (err) {
        console.error(
            "Something went wrong while uploading movies and show timings."
        );
        console.error(err);
    }
};

module.exports = { putStaticData };
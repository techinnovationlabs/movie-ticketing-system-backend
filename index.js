const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const Movies = require("./models/movie");
const ShowTimings = require("./models/showtiming");

// Congfiguration of dot env variables
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);

const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movie");
const reviewRoutes = require("./routes/review");
const screenRoutes = require("./routes/screen");
const showRoutes = require("./routes/show");
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/screen", screenRoutes);
app.use("/api/v1/show", showRoutes);

// Static Data check and creation incase of not already did

const uploadMoviesAndShowTimings = async () => {
  try {
    const movies = [
      {
        title: "Venom: Let There Be Carnage",
        description: "Action,Horror,Sci-Fi,Thriller• UA •",
        totalReviews: 100,
        totalRatings: 430,
        avgRating: 4.3,
        summary:
          "Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL`s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=-FmWuCgJmxo",
      },
      {
        title: "The Conjuring: The Devil Made Me Do It",
        description: "Horror • A •",
        totalReviews: 100,
        totalRatings: 450,
        avgRating: 4.5,
        summary:
          "Paranormal investigators Ed and Lorraine Warren are faced with one of their most challenging cases when a murder suspect claims to be possessed by a demon. The movie is also available in 4K on BMS stream.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOWRkOTYzZTQtMzQwNi00NDYwLTk4NjUtN2FjYTI4Y2UzM2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=h9Q4zZS2v1k",
      },
      {
        title: "Zack Snyder's Justice League",
        description: "Action,Adventure Fantasy • 16+ •",
        totalReviews: 100,
        totalRatings: 400,
        avgRating: 4.0,
        summary:
          "Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=6sO2dS9B7ss",
      },
      {
        title: "Dune",
        description: "Action,Adventure,Drama,Sci-Fi • UA • ",
        totalReviews: 100,
        totalRatings: 380,
        avgRating: 3.8,
        summary:
          "Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=HGF4jok6e4s",
      },
      {
        title: "No Time To Die",
        description: " • Action, Adventure, Thriller • UA •",
        totalReviews: 100,
        totalRatings: 430,
        avgRating: 4.3,
        summary:
          "Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology. Will bond be able to find out what`s it all about? An action-packed thriller awaits you.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=WcAFd8XOUIA",
      },
    ];
    const showTimings = [
      {
        title: "Morning",
        time: "9:00 AM",
      },
      {
        title: "Matinee",
        time: "12:00 PM",
      },
      {
        title: "Matinee",
        time: "1:00 PM",
      },
      {
        title: "Evening",
        time: "7:00 PM",
      },
      {
        title: "Night",
        time: "10:00 PM",
      },
    ];
    const checkMovies = await Movies.count();
    const checkShowTimings = await ShowTimings.count();
    if (checkMovies === 0) {
      const uploadMovies = await Movies.insertMany(movies);
      if (uploadMovies.length) {
        console.log("Static Data for Movies uploaded successfully!");
      }
    }
    if (checkShowTimings === 0) {
      const uploadTimings = await ShowTimings.insertMany(showTimings);
      if (uploadTimings.length) {
        console.log("Static Data for Show Timings uploaded successfully!");
      }
    }
  } catch (err) {
    console.error(
      "Something went wrong while uploading movies and show timings."
    );
    console.error(err);
  }
};

server.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
console.log(process.env.MONGO_URL);
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
    uploadMoviesAndShowTimings();
  } catch (err) {
    console.error(err);
  }
})();

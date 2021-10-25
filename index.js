const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
// Congfiguration of dot env variables
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const server = http.createServer(app);
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
  } catch (err) {
    console.error(err);
  }
})();

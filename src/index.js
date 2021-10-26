const express = require('express');
const app = express();
const cors = require('cors');
require('./db/moongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
const userRoutes = require('./routers/user');
const authRoutes = require('./routers/auth');
const movieRoutes = require('./routers/movie');
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movies", movieRoutes);

app.listen(port, () => {
    console.log("server is up");
});
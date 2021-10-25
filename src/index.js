const express = require('express');
const app = express();
require('./db/moongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
const userRoutes = require('./routers/user');
const authRoutes = require('./routers/auth');
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
    console.log("server is up");
});
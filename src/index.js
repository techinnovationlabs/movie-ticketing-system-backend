const express = require('express');
const app = express();
require('./db/moongoose');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server is up");
});
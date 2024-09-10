const mongoose = require('mongoose');
const { putStaticData } = require('./static-data');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});

mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
    putStaticData();
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});
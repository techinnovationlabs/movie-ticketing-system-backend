const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ _id: decodedToken._id });
        if (!user) {
            return res.status(401).send({ message: 'Unauthorized user' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({ message: "Unauthorized user" });
    }
};

module.exports = auth;
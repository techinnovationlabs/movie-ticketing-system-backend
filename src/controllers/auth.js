const User = require("../models/user");

const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(500)
            .send(e.message);
    }
};

module.exports = {
    login
};
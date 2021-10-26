const User = require("../models/user");

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (e) {
        res.status(500)
            .send("An error occurred while deleting the activities: " + e.message);
    }
};

const createUser = async (req, res) => {
    const { email } = req.body;
    try {
        let existingUser = await User.findOne({
            email,
        });
        if (existingUser) {
            return res
                .status(400)
                .send("This account has already been registered.");
        }
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        return res.status(201).send({ user, token });
    } catch (e) {
        res.status(500).send("An error occurred while registering the User: " + e.message);
    }
};

const fetchCurrentUser = async (req, res) => {
    const token = await req.user.generateAuthToken();
    res.send({ user: req.user, token });
};

module.exports = {
    fetchUsers,
    createUser,
    fetchCurrentUser
};
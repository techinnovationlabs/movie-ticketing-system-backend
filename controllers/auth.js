const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Generating auth token
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 7);
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          role: user.role,
          exp: parseInt(expiry.getTime() / 1000),
        },
        process.env.JWT_PRIVATE_KEY
      );
      return res.send({
        user,
        token,
      });
    }
    return res.status(406).send("Email or password incorrect.");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while authenticating", err.message);
  }
};

const register = async (req, res) => {
  try {
    const { email, password, confirm, role, name, phoneNumber, gender } =
      req.body;
    const body = {
      name,
      email,
      phoneNumber,
      gender,
      role,
    };
    if (password !== confirm) {
      return res.status(400).send("Passwords mismatch");
    }
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    body.password = hash;
    let user = await new User(body);
    user = await user.save();
    if (user) {
      return res.status(200).send("success");
    }
    return res.status(500).send("Something went wrong!");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while authenticating", err.message);
  }
};

module.exports = {
  auth,
  register,
};

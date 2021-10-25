const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, UserController.fetchUsers);

router.get("/me", auth, UserController.fetchCurrentUser);

router.post("/", UserController.createUser);

module.exports = router;
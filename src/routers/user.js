const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();

router.get("/", UserController.fetchUsers);

router.get("/me", UserController.fetchCurrentUser);

router.post("/", UserController.createUser);

module.exports = router;
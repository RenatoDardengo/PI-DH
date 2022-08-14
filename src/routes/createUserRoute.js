const express = require("express");
const router = express.Router();
const createUserController = require("../controllers/createUserController")

router.get("/", createUserController.create)

module.exports = router;
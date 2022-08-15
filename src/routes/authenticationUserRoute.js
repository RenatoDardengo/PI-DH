const express = require ("express");
const router = express.Router();
const autheUserController = require ("../controllers/AuthenticationUserController");

router.get("/", autheUserController.login)

module.exports = router;

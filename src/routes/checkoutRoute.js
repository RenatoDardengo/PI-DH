const express = require("express");
const router = express.Router();
const cartController = require("../controllers/CartController")

router.get("/", cartController.index)


module.exports=router;
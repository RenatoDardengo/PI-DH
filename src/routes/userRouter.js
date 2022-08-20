const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/produtos",userController.produts);
router.get("/produtos/:id", userController.product);
module.exports=router;
